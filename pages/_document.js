import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const path = process.env.DOMINIO;

  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          type="image/png"
          href={
            path === 'damianvigo.com'
              ? `http://${path}/favicon-16x16.png`
              : `http://localhost:3000/favicon-16x16.png`
          }
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href={
            path === 'damianvigo.com'
              ? `http://${path}/favicon-16x16.png`
              : `http://localhost:3000/favicon-16x16.png`
          }
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://damianvigo.com" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="author" content="Damian Vigo" />
        <meta
          name="keywords"
          content="porfolio, portfolio, desarrollador web, front-end, Frontend, developer, programador, diseño web, full stack javascript developer"
        />
        <meta name="theme-color" content="#022b3a" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website dvdev" />
        <meta
          property="og:title"
          name="twitter:title"
          content="Website - Damian Vigo"
        />
        <meta
          property="og:image"
          name="twitter:image"
          content="https://i.imgur.com/SpUDEmn.jpg"
        />
        <meta
          property="og:url"
          name="twitter:url"
          content="https://damianvigo.com"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
