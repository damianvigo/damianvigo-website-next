import '../styles/globals.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { ThemeProvider } from '../context/ThemeContext';
import NextNProgress from 'nextjs-progressbar';
import BtnMusic from '../utils/BtnMusic';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const id = process.env.GOOGLE_ANALYTICS;

  return (
    <>
      <ThemeProvider>
        <GoogleAnalytics gaMeasurementId="UA-145056950-1" />
        {pathname !== '/404' && <BtnMusic />}
        <NextNProgress color="#f72585" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
