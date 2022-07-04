import '../styles/globals.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import { ThemeProvider } from '../context/ThemeContext';
import NextNProgress from 'nextjs-progressbar';
import BtnMusic from '../utils/BtnMusic';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
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
      <ThemeProvider>
        <BtnMusic />
        <NextNProgress color="#f72585" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
