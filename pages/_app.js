import '../styles/globals.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../context/ThemeContext';
import Script from 'next/script';
import BtnMusic from '../utils/BtnMusic';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useEffect } from 'react';

NProgress.configure({ showSpinner: false });

const PageWrapper = styled(motion.div)`
  background-color: var(--first-color);
`;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleComplete = () => NProgress.done();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <style>{`#nprogress .bar { background: var(--active) !important; }`}</style>
      <ThemeProvider>
        {process.env.GOOGLE_ANALYTICS && (
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
                gtag('config', '${process.env.GOOGLE_ANALYTICS}');
              `}
            </Script>
          </>
        )}
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
