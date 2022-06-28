import styled from 'styled-components';
import Script from 'next/script';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import ThemeContext from '../../context/ThemeContext';
import BtnScrollTop from '../../utils/BtnScrollTop';
import useScrollTop from '../../hooks/useScrollTop';
import BtnDarkMode from '../../utils/BtnDarkMode';
// Components
import Head from 'next/head';
import Header from '../Header';
import HeroImage from '../HeroImage';
import Footer from '../Footer';

import useNetworkStatus from '../../hooks/useNetworkStatus';
import NetworkStatus from '../NetworkStatus';

const Layout = ({ children, title, description }) => {
  const { theme } = useContext(ThemeContext);
  /*   console.log(theme); */
  const { toTop, scrollTop, setScrollTop } = useScrollTop();

  const router = useRouter();
  const { pathname } = router;

  const [isOnline] = useNetworkStatus();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta description={description} />
        <meta
          name="twitter:description"
          property="og:description"
          content={description}
        />
      </Head>
      {isOnline && (
        <NetworkStatus
          conect="var(--first-color);"
          down="Conexión Perdida"
          up="La conexión se ha restablecido"
        />
      )}
      <SectionContainerStyled theme={theme}>
        <Header theme={theme} />
        <HeroImage
          backgroundImage="https://i.imgur.com/SpUDEmn.jpg"
          contactTitle="Contacto"
        />
      </SectionContainerStyled>
      <main className={theme}>{children}</main>
      {pathname !== '/404' && (
        <>
          <BtnScrollTop
            toTop={toTop}
            scrollTop={scrollTop}
            setScrollTop={setScrollTop}
          />
          <BtnDarkMode />
          <Footer />
          {/*   <Script
            id="my-script"
            strategy="afterInteractive"
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-145056950-1"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
           window.dataLayer = window.dataLayer || [];
            function gtag() {
           dataLayer.push(arguments);
          }
        gtag('js', new Date());
        gtag('config', 'UA-145056950-1');
          `}
          </Script> */}
        </>
      )}
    </>
  );
};

export default Layout;

const SectionContainerStyled = styled.section`
  border-bottom: thin solid
    ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--black-alpha-color)'};
`;
