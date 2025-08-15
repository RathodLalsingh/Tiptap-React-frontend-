import React from 'react'

export default function Page({ children, pageNumber }) {
  return (
    <div className="page">
      <header className="page-header">Header of - My Document</header>
      <main className="page-body">{children}</main>
      <footer className="page-footer">Page footer {pageNumber}</footer>
    </div>
  )
}
