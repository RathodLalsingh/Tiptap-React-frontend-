
import React, { useEffect, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Page from './Page'
import paginateContent from './utils/paginate'

export default function Editor() {
  const [pages, setPages] = useState([])

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing ffrom here..',
      }),
    ],
    content: '<p>Hello, start writing your document form here...</p>',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      setPages(paginateContent(html))
    }
  })

  // Initial pagination
  useEffect(() => {
    if (editor) {
      setPages(paginateContent(editor.getHTML()))
    }
  }, [editor])

  return (
    <div>
      {pages.map((content, index) => (
        <Page key={index} pageNumber={index + 1}>
          <EditorContent
            editor={editor}
            content={content}
            className="editor-content"
          />
        </Page>
      ))}
    </div>
  )
}