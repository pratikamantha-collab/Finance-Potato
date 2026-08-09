import fitz

pdf_path = "C:/Users/kumar/.gemini/antigravity/brain/4633625c-f2bd-47ea-b8e1-07366ab0601a/.user_uploaded/media__1785987354051.pdf"
doc = fitz.open(pdf_path)

for page in doc:
    tabs = page.find_tables()
    for tab in tabs:
        print(tab.extract())
        break
    break
