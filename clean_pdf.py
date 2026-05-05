import re

with open('pdf_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace single newlines with spaces to join split words, but keep double newlines
text = re.sub(r'(?<!\n)\n(?!\n)', ' ', text)

with open('cleaned_pdf.txt', 'w', encoding='utf-8') as f:
    f.write(text)
