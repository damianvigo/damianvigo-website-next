import Footer from '../Footer';
import BtnScrollTop from '../../utils/BtnScrollTop';
import useScrollTop from '../../hooks/useScrollTop';
import BtnDarkMode from '../../utils/BtnDarkMode';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Header from '../Header';
import HeroImage from '../HeroImage';

const Layout = ({ children }) => {
  const backgroundImage = 'https://picsum.photos/1920/1080';
  const { theme } = useContext(ThemeContext);
  /*   console.log(theme); */
  const { toTop, scrollTop, setScrollTop } = useScrollTop();
  return (
    <>
      <section>
        <Header theme={theme} styckyHome />
        <HeroImage backgroundImage={backgroundImage} />
      </section>
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
