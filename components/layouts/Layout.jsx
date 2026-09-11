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
  jsonLd,
}) => {
  const { theme } = useContext(ThemeContext);
  const { toTop, scrollTop, setScrollTop } = useScrollTop();

  const router = useRouter();
  const { pathname, asPath } = router;

  const [isOnline] = useNetworkStatus();

  const TITLE = title || 'Damián Vigo | Frontend Developer React & Next.js';
  const DESCRIPTION = description || 'Frontend Developer de Buenos Aires, Argentina. Especializado en React, Next.js y desarrollo web moderno.';
  const OG_DESCRIPTION = ogDescription || DESCRIPTION;
  const DEFAULT_IMAGE = 'https://i.imgur.com/BjlU9xu.jpg';
  const OG_IMAGE = ogImage || DEFAULT_IMAGE;
  const IMAGE_WIDTH = width || '1200';
  const IMAGE_HEIGHT = height || '630';
  const IMAGE_TYPE = type || 'image/jpeg';
  const SITE_NAME = 'Damián Vigo';
  const URL = `https://dvdev.vercel.app${asPath === '/' ? '' : asPath}`;
  const OG_TYPE = /\/blog\/.+/.test(pathname) ? 'article' : 'website';

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Damián Vigo',
    url: 'https://dvdev.vercel.app',
    jobTitle: 'Frontend Developer',
    sameAs: [
      'https://github.com/damianvigo',
      'https://www.linkedin.com/in/damian-vigo/',
    ],
  };

  const structuredData = jsonLd || defaultJsonLd;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        {/* Open Graph */}
        <meta property="og:type" content={OG_TYPE} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={OG_DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content={IMAGE_TYPE} />
        <meta property="og:image:width" content={IMAGE_WIDTH} />
        <meta property="og:image:height" content={IMAGE_HEIGHT} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={OG_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
      theme === 'dark' ? 'var(--second-color)' : 'var(--second-color)'};
`;
