import '../styles/globals.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../context/ThemeContext';
import Script from 'next/script';
import NextNProgress from 'nextjs-progressbar';
import BtnMusic from '../utils/BtnMusic';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const PageWrapper = styled(motion.div)`
  background-color: var(--first-color);
`;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <ThemeProvider>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.GOOGLE_ANALYTICS}');
          `}
        </Script>
        <NextNProgress color="#f72585" />
        <AnimatePresence mode="wait">
          <PageWrapper
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Component {...pageProps} />
          </PageWrapper>
        </AnimatePresence>
        {pathname !== '/404' && <BtnMusic />}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
