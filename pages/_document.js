import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" hrefLang="es" href="https://dvdev.vercel.app/" />
        <link
          rel="icon"
          type="image/png"
          href="https://dvdev.vercel.app/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="https://dvdev.vercel.app/favicon-16x16.png"
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
        <meta
          name="google-site-verification"
          content="KvRh1BJjaDvoO88GM-j14cKqnfAnUZDmS_zcsLxK0wg"
        />
        <meta name="author" content="Damián Vigo" />
        <meta
          name="keywords"
          content="portfolio, desarrollador web, frontend, developer, programador, diseño web, React, Next.js, JavaScript, Buenos Aires, Argentina"
        />
        <meta name="theme-color" content="#022b3a" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
