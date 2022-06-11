import Footer from '../Footer';
import BtnScrollTop from '../../utils/BtnScrollTop';
import useScrollTop from '../../hooks/useScrollTop';
import BtnDarkMode from '../../utils/BtnDarkMode';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  /*   console.log(theme); */
  const { toTop, scrollTop, setScrollTop } = useScrollTop();
  return (
    <>
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
