import sys

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

counts = {
    '{': content.count('{'),
    '}': content.count('}'),
    '(': content.count('('),
    ')': content.count(')'),
    '[': content.count('['),
    ']': content.count(']'),
    '`': content.count('`')
}

for char, count in counts.items():
    print(f"{char}: {count}")

# Find where it breaks
stack = []
for i, char in enumerate(content):
    if char in '{([':
        stack.append((char, i))
    elif char in '})]':
        if not stack:
            print(f"Extra closing {char} at index {i}")
        else:
            opening, pos = stack.pop()
            if (opening == '{' and char != '}') or \
               (opening == '(' and char != ')') or \
               (opening == '[' and char != ']'):
                print(f"Mismatched {char} at index {i}, matches {opening} at index {pos}")

if stack:
    for char, pos in stack:
        # Get context
        start = max(0, pos - 20)
        end = min(len(content), pos + 20)
        context = content[start:end].replace('\n', '\\n')
        print(f"Unclosed {char} at index {pos}. Context: ...{context}...")
