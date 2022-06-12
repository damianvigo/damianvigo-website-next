import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
// Utils
import BtnScrollTop from '../../utils/BtnScrollTop';
import useScrollTop from '../../hooks/useScrollTop';
import BtnDarkMode from '../../utils/BtnDarkMode';
// Components
import Header from '../Header';
import HeroImage from '../HeroImage';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const backgroundImage = 'https://picsum.photos/1920/1080';
  const { theme } = useContext(ThemeContext);
  /*   console.log(theme); */
  const { toTop, scrollTop, setScrollTop } = useScrollTop();
  return (
    <>
      <SectionContainerStyled theme={theme}>
        <Header theme={theme} styckyHome />
        <HeroImage backgroundImage={backgroundImage} />
      </SectionContainerStyled>
      <main className={theme}>{children}</main>
      <BtnScrollTop
        toTop={toTop}
        scrollTop={scrollTop}
        setScrollTop={setScrollTop}
      />
      <BtnDarkMode />
      <Footer />
    </>
  );
};

export default Layout;

const SectionContainerStyled = styled.section`
  border-bottom: thin solid
    ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--black-alpha-color)'};
`;
