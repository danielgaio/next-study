import React from 'react'
import Link from '../src/components/Link'

function GlobalStyle() {
  return (
    <style>{`
      body: font-family: sans-serif;
    `}</style>
  )
}

function Title({ children, as }) {
  const Tag = as
  return (
    <React.Fragment>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </React.Fragment>
  )
}

export default function HomePage() {
  return (
    <div>
      <Title as='h1'>Alura cases - Home Page</Title>
      <Link href='/faq'>
        Ir para o FAQ
      </Link>
    </div>
  )
}
