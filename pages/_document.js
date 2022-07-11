import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

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
              ? `https://${path}/favicon-16x16.png`
              : `http://localhost:3000/favicon-16x16.png`
          }
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href={
            path === 'damianvigo.com'
              ? `https://${path}/favicon-16x16.png`
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
        <meta
          name="google-site-verification"
          content="KvRh1BJjaDvoO88GM-j14cKqnfAnUZDmS_zcsLxK0wg"
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
          property="og:url"
          name="twitter:url"
          content="https://damianvigo.com"
        />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.GOOGLE_ANALYTICS});
          `}
        </Script>
        <Script id="google-tag-manager-head">
          {`
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TD8JFJT');</script>
        <!-- End Google Tag Manager -->
        
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="google-tag-manager-body">
          {`
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD8JFJT"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        `}
        </Script>
      </body>
    </Html>
  );
}
