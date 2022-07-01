import '../styles/globals.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import { ThemeProvider } from '../context/ThemeContext';
import NextNProgress from 'nextjs-progressbar';
import BtnMusic from '../utils/BtnMusic';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <BtnMusic />
      <NextNProgress color="#f72585" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
