# Tiptap  React Pagination project

## Features
- A4-style visual pages
- Automatic pagination when text exceeds a page
- Manual page breaks supported via `Ctrl+Enter` (to be implemented)
- Header & footer with dynamic page numbers
- Works with print/export (`Ctrl+P`)

## Constraints
- Height measurement is simulated (character-based) for simplicity
- Complex layouts like tables or images may not split perfectly
- For production, you'd measure DOM node heights and split dynamically

## Trade-offs
- Character-based split is simple but inaccurate for varied font sizes
- DOM measurement is accurate but slower
- Tiptap allows custom nodes for page breaks, which we could implement

## Production Approach
- Replace char-split with DOM-based split
- Implement a `PageBreak` Tiptap extension
- Add page numbering in print CSS
- Optimize for large documents with virtualization
