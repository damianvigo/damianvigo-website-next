import styled from 'styled-components';
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

const Layout = ({
  children,
  title,
  description,
  ogDescription,
  ogImage,
  width,
  height,
  type,
}) => {
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
        <meta property="og:image" name="twitter:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta
          name="twitter:description"
          property="og:description"
          content={ogDescription}
        />
        <meta property="og:image:type" content={type} />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
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
        <HeroImage contactTitle="Contacto" />
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
