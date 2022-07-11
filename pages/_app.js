import '../styles/globals.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import { ThemeProvider } from '../context/ThemeContext';
import NextNProgress from 'nextjs-progressbar';
import BtnMusic from '../utils/BtnMusic';
import Script from 'next/script';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
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
      <ThemeProvider>
        {pathname !== '/404' && <BtnMusic />}
        <NextNProgress color="#f72585" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
