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
      <ThemeProvider>
        {pathname !== '/404' && <BtnMusic />}
        <NextNProgress color="#f72585" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
