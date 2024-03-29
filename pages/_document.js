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
        <link rel="canonical" href="https://dvdev.vercel.app/" />
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
          property="og:url"
          name="twitter:url"
          content="https://dvdev.vercel.app/"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
