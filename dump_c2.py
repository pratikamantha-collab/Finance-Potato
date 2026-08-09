import fitz
import re

pdf_path = "C:/Users/kumar/.gemini/antigravity/brain/4633625c-f2bd-47ea-b8e1-07366ab0601a/.user_uploaded/media__1785987354051.pdf"
doc = fitz.open(pdf_path)

text = ""
for page in doc:
    text += page.get_text()

# Clean up headers/footers
text = re.sub(r'Course \d+: [^\n]+\n', '', text)
text = re.sub(r'Personal Finance Foundations\s+\|\s+Page \d+\n', '', text)

course_parts = re.split(r'COURSE \d+', text, flags=re.IGNORECASE)
c2 = course_parts[2] # Course 2
with open('c2_dump.txt', 'w', encoding='utf-8') as f:
    f.write(c2[:3000]) # first 3000 chars of course 2
