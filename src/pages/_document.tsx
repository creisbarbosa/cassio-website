import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth selection:bg-yellow">
      <Head />
      <body className="bg-background text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
