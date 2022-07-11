import '../styles/globals.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import { useRouter } from 'next/router';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';
import { ThemeProvider } from '../context/ThemeContext';
import NextNProgress from 'nextjs-progressbar';
import BtnMusic from '../utils/BtnMusic';

function MyApp({ Component, pageProps }) {
  usePageViews();
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <ThemeProvider>
        <GoogleAnalytics />
        {pathname !== '/404' && <BtnMusic />}
        <NextNProgress color="#f72585" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
