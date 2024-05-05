import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  //console.log(localStorage);
  
  return (
    <Html
      lang="en"
      >
      <Head />
      <body className="dark:bg-slate-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
