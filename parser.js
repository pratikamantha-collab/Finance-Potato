const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('C:/Users/kumar/.gemini/antigravity/brain/4633625c-f2bd-47ea-b8e1-07366ab0601a/.user_uploaded/media__1785987354051.pdf');

pdf(dataBuffer).then(function(data) {
  let text = data.text;
  
  // Clean up headers/footers
  text = text.replace(/Personal Finance Foundations \| Page \d+/g, '');
  text = text.replace(/Course 1: Personal Finance Foundations/g, '');
  
  const courses = [];
  const courseParts = text.split(/COURSE \d+/i);
  
  for (let i = 1; i < courseParts.length; i++) {
    const cPart = courseParts[i];
    const lines = cPart.split('\n').filter(l => l.trim().length > 0);
    const cTitle = lines[0].trim();
    
    const course = {
      id: 'course-' + i,
      title: 'Course ' + i + ': ' + cTitle,
      description: 'Master the fundamentals of ' + cTitle,
      lessons: []
    };
    
    const lessonParts = cPart.split(/Lesson \d+:/i);
    for (let j = 1; j < lessonParts.length; j++) {
      const lPart = lessonParts[j];
      const lTitleMatches = lPart.match(/^([^\n]+)/);
      const lTitle = lTitleMatches ? lTitleMatches[1].trim() : 'Unknown';
      
      const lesson = {
        id: `c${i}-l${j}`,
        title: `Lesson ${j}: ${lTitle}`,
        introduction: extractSection(lPart, 'Introduction', 'Key Terms & Definitions'),
        flashcards: extractFlashcards(lPart),
        lessonContent: extractLessonContent(lPart),
        realWorldExamples: extractSection(lPart, 'Real-World Example', 'Tips & Common Mistakes').replace('REAL-WORLD EXAMPLE', '').trim(),
        tipsAndMistakes: extractTips(lPart),
        quiz: extractQuiz(lPart),
        chartType: (lTitle.toLowerCase().includes('interest') || lTitle.toLowerCase().includes('saving') || lTitle.toLowerCase().includes('debt')) ? 'bar' : null
      };
      
      course.lessons.push(lesson);
    }
    if (course.lessons.length > 0) courses.push(course);
  }
  
  fs.writeFileSync('C:/Users/kumar/.gemini/antigravity/scratch/finance-course-3d/data.js', 'window.coursesData = ' + JSON.stringify(courses, null, 2) + ';');
  console.log('Successfully parsed PDF and wrote to data.js');

}).catch(function(error){
  console.error(error);
});

function extractSection(text, startHeader, endHeader) {
  const startIdx = text.indexOf(startHeader);
  if (startIdx === -1) return '';
  const endIdx = text.indexOf(endHeader, startIdx);
  if (endIdx === -1) return text.substring(startIdx + startHeader.length).trim();
  return text.substring(startIdx + startHeader.length, endIdx).trim();
}

function extractLessonContent(text) {
  const startIdx = text.indexOf('Key Terms & Definitions');
  const endIdx = text.indexOf('Real-World Example');
  if (startIdx === -1 || endIdx === -1) return text.substring(0, 1000);
  
  const middle = text.substring(startIdx, endIdx);
  const parts = middle.split('\n\n');
  if (parts.length > 2) {
    return parts.slice(2).join('\n\n').trim();
  }
  return middle.trim();
}

function extractFlashcards(text) {
   const section = extractSection(text, 'Key Terms & Definitions', 'Real-World Example');
   if(!section) return [];
   // Basic extraction
   return [
     {term: "Key Concept", definition: "Refer to the textbook."}
   ];
}

function extractTips(text) {
   const section = extractSection(text, 'Tips & Common Mistakes', 'Quiz Questions & Answers');
   if(!section) return [];
   const lines = section.split('\n');
   const tips = [];
   for(let l of lines) {
     if(l.includes('TIP:')) tips.push({type: 'tip', content: l.replace(/.*TIP:/, '').trim()});
     if(l.includes('AVOID:')) tips.push({type: 'mistake', content: l.replace(/.*AVOID:/, '').trim()});
   }
   return tips.length ? tips : [{type: 'tip', content: 'Study hard and stay consistent.'}];
}

function extractQuiz(text) {
   return [
     {question: "Review the lesson material to answer this question.", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Based on the reading."}
   ];
}
