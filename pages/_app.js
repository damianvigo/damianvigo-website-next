import '../styles/globals.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../context/ThemeContext';
import Script from 'next/script';
import NextNProgress from 'nextjs-progressbar';
import BtnMusic from '../utils/BtnMusic';

function MyApp({ Component, pageProps }) {
  usePageViews();
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <ThemeProvider>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=UA-145056950-1"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145056950-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-145056950-1');
          </script>
          
          `}
        </Script>
        {pathname !== '/404' && <BtnMusic />}
        <NextNProgress color="#f72585" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
