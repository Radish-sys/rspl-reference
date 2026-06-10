import re

with open('index_clean.html', 'r', encoding='utf-8') as f:
    c = f.read()

style_match = re.search(r'(<style>)(.*?)(</style>)', c, flags=re.DOTALL)

if not style_match:
    print("No <style> block found")
else:
    css = style_match.group(2)

    # Find all :root { ... } blocks
    root_blocks = list(re.finditer(r':root\s*\{[^}]*\}', css, flags=re.DOTALL))
    print(f"Found {len(root_blocks)} :root blocks")

    if len(root_blocks) < 2:
        print("No duplicate :root found, nothing to do.")
    else:
        # Print them so we can see what we're dealing with
        for i, b in enumerate(root_blocks):
            print(f"\n--- :root block {i+1} ---")
            print(b.group(0)[:300])

        # Keep only the LAST :root block (it supersedes earlier ones)
        for b in root_blocks[:-1]:
            css = css.replace(b.group(0), '', 1)

        # Put the cleaned CSS back
        new_style = style_match.group(1) + css + style_match.group(3)
        c = c[:style_match.start()] + new_style + c[style_match.end():]

        with open('index_clean.html', 'w', encoding='utf-8') as f:
            f.write(c)

        print("\ndone — duplicate :root removed")