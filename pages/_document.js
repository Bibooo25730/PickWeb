import { Html, Head, Main,NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head />
      <body>
        <Main />
        <NextScript/>
        {/* <script src='./install.js'></script> */}
        {/* <Script src='/blogthree/pages/install.js' strategy="beforeInteractive"/> */}
      </body>
    </Html>
  )
}
