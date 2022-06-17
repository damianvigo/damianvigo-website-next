import 'hamburgers/dist/hamburgers.min.css';
import { ThemeProvider } from '../context/ThemeContext';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NextNProgress color="#60d394" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
