import fitz
import json
import re

pdf_path = "C:/Users/kumar/.gemini/antigravity/brain/4633625c-f2bd-47ea-b8e1-07366ab0601a/.user_uploaded/media__1785987354051.pdf"
doc = fitz.open(pdf_path)

text = ""
for page in doc:
    text += page.get_text()

# Clean up headers/footers
text = re.sub(r'Course \d+: [^\n]+\n', '', text)
text = re.sub(r'Personal Finance Foundations\s+\|\s+Page \d+\n', '', text)

courses = []
course_parts = re.split(r'COURSE \d+', text, flags=re.IGNORECASE)

def extract_section(l_text, start_str, end_str):
    start_idx = l_text.find(start_str)
    if start_idx == -1: return ""
    end_idx = l_text.find(end_str, start_idx)
    if end_idx == -1: return l_text[start_idx + len(start_str):].strip()
    return l_text[start_idx + len(start_str):end_idx].strip()

def parse_flashcards(l_text):
    start_idx = l_text.find('Key Terms & Definitions')
    if start_idx == -1: return []
    
    # We want text from Key Terms to the end of the lesson (we will break early)
    block = l_text[start_idx:]
    lines = [l.strip() for l in block.split('\n') if l.strip()]
    
    # Skip until 'Definition'
    idx = 0
    while idx < len(lines) and lines[idx] != 'Definition':
        idx += 1
    idx += 1 # skip 'Definition'
    
    flashcards = []
    current_term = ""
    current_def = ""
    
    while idx < len(lines):
        line = lines[idx]
        
        # Stop at the next major section or known header
        if line in ["Real-World Example", "Tips & Common Mistakes", "Quiz Questions & Answers"] or line.startswith("Why Budgeting Works") or line.startswith("Building Your First Budget"):
             break
        if not current_def and len(line) > 80 and not current_term:
             # if we are not parsing a term and we hit a long paragraph, we might be out of the table
             break
        
        # Heuristic for Term: short, doesn't end in punctuation
        if not line.endswith('.') and not line.endswith('?') and len(line) <= 45 and not current_term:
            current_term = line
            idx += 1
            continue
            
        if current_term:
            current_def += line + " "
            if line.endswith('.'):
                # End of definition
                flashcards.append({"term": current_term, "definition": current_def.strip()})
                current_term = ""
                current_def = ""
            idx += 1
        else:
            # If we don't have a term and it doesn't look like one, table is probably done
            break
            
    return flashcards

def parse_quizzes(l_text):
    start_idx = l_text.find('Quiz Questions & Answers')
    if start_idx == -1: return []
    
    block = l_text[start_idx:]
    lines = [l.strip() for l in block.split('\n') if l.strip()]
    
    idx = 0
    while idx < len(lines) and lines[idx] != 'Answer':
        idx += 1
    idx += 1 # skip 'Answer'
    
    quizzes = []
    current_q_num = 1
    
    while idx < len(lines):
        line = lines[idx]
        if line == str(current_q_num):
            idx += 1
            # Gather question
            question = ""
            while idx < len(lines) and not lines[idx].endswith('?'):
                question += lines[idx] + " "
                idx += 1
            if idx < len(lines):
                question += lines[idx]
                idx += 1
            
            # Gather answer
            answer = ""
            while idx < len(lines) and lines[idx] != str(current_q_num + 1) and not (lines[idx].startswith('Lesson') or lines[idx].startswith('COURSE')):
                answer += lines[idx] + " "
                idx += 1
            
            if question:
                quizzes.append({
                    "question": question.strip(),
                    "options": [answer.strip(), "True", "False", "None of the above"],
                    "correctIndex": 0,
                    "explanation": answer.strip()
                })
            current_q_num += 1
        else:
            idx += 1
            
    return quizzes

for i in range(1, len(course_parts)):
    c_part = course_parts[i]
    lines = [l for l in c_part.split('\n') if l.strip()]
    if not lines: continue
    c_title = lines[0].strip()
    
    course = {
        'id': f'course-{i}',
        'title': f'Course {i}: {c_title}',
        'description': f'Master the fundamentals of {c_title}',
        'lessons': []
    }
    
    lesson_parts = re.split(r'Lesson \d+:', c_part, flags=re.IGNORECASE)
    for j in range(1, len(lesson_parts)):
        l_part = lesson_parts[j]
        l_title_match = re.match(r'^([^\n]+)', l_part)
        if not l_title_match: continue
        l_title = l_title_match.group(1).strip()
        
        start_idx = l_part.find('Introduction')
        if start_idx != -1:
            intro = extract_section(l_part, 'Introduction', 'Key Terms & Definitions')
        else:
            title_len = len(l_title_match.group(0))
            end_idx = l_part.find('Key Terms & Definitions')
            if end_idx == -1: end_idx = title_len + 1000
            intro_text = l_part[title_len:end_idx].strip()
            intro_lines = [line.strip() for line in intro_text.split('\n') if line.strip() and not line.startswith('Course ')]
            intro = ' '.join(intro_lines[:6])
        
        flashcards = parse_flashcards(l_part)
        if not flashcards: flashcards = [{'term': 'Note', 'definition': 'Review the lesson for key terms.'}]
        
        # Lesson content should be everything after Key Terms & Definitions, until Real-World Example
        # But we want to strip out the actual flashcard table from the content so it's not duplicated.
        content_section = extract_section(l_part, 'Key Terms & Definitions', 'Real-World Example')
        
        # Just grab the last half of the content section assuming the table is at the top
        content_lines = content_section.split('\n')
        # Skip until we see long lines (paragraphs)
        c_idx = 0
        while c_idx < len(content_lines):
            if len(content_lines[c_idx]) > 80:
                break
            c_idx += 1
        
        lessonContent = '\n'.join(content_lines[c_idx:]).strip()
        if not lessonContent: lessonContent = content_section # fallback
        
        real_world = extract_section(l_part, 'Real-World Example', 'Tips & Common Mistakes').replace('REAL-WORLD EXAMPLE', '').replace('Real-World Example', '').strip()
        
        tips = []
        tips_str = extract_section(l_part, 'Tips & Common Mistakes', 'Quiz Questions & Answers')
        for line in tips_str.split('\n'):
            if 'TIP:' in line: tips.append({'type': 'tip', 'content': line.split('TIP:')[-1].strip()})
            if 'AVOID:' in line: tips.append({'type': 'mistake', 'content': line.split('AVOID:')[-1].strip()})
        if not tips: tips = [{'type': 'tip', 'content': 'Review the chapter carefully.'}]
        
        quiz = parse_quizzes(l_part)
        if not quiz: quiz = [{'question': 'Did you understand the lesson?', 'options': ['Yes', 'No'], 'correctIndex': 0, 'explanation': 'Great!'}]
        
        lesson = {
            'id': f'c{i}-l{j}',
            'title': f'Lesson {j}: {l_title}',
            'introduction': intro,
            'flashcards': flashcards,
            'lessonContent': lessonContent.replace('\n', '<br/>'),
            'realWorldExamples': real_world,
            'tipsAndMistakes': tips,
            'quiz': quiz,
            'chartType': 'bar' if any(w in l_title.lower() for w in ['interest', 'saving', 'debt', 'investing']) else None
        }
        course['lessons'].append(lesson)
        
    if course['lessons']:
        courses.append(course)

with open('C:/Users/kumar/.gemini/antigravity/scratch/finance-course-3d/data.js', 'w', encoding='utf-8') as f:
    f.write('window.coursesData = ' + json.dumps(courses, indent=2) + ';\n')

print('Success!')
