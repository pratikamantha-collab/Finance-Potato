import fitz

pdf_path = "C:/Users/kumar/.gemini/antigravity/brain/4633625c-f2bd-47ea-b8e1-07366ab0601a/.user_uploaded/media__1785987354051.pdf"
doc = fitz.open(pdf_path)

with open('dump.txt', 'w', encoding='utf-8') as f:
    for i in range(5):
        f.write(doc[i].get_text())
