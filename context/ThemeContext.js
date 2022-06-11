import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
// console.log(ThemeContext);
/* 
const initialTheme = JSON.parse(localStorage.getItem('theme')) || '';

const initialBtnIcon = JSON.parse(localStorage.getItem('btnIcon') || false); */

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(JSON.parse(localStorage.getItem('theme')));
    }

    if (localStorage.getItem('btnIcon')) {
      setBtnSvg(JSON.parse(localStorage.getItem('btnIcon')));
    }
  }, []);

  const [theme, setTheme] = useState('');
  const [btnSvg, setBtnSvg] = useState(false);

  const handleTheme = (e) => {
    if (btnSvg) {
      setTheme('light');
      setBtnSvg(!btnSvg);
    } else {
      setTheme('dark');
      setBtnSvg(!btnSvg);
    }
  };

  useEffect(() => {
    /*    JSON.parse(localStorage.getItem('theme')) || '';
    JSON.parse(localStorage.getItem('btnIcon') || false); */
    localStorage.setItem('theme', JSON.stringify(theme));
    localStorage.setItem('btnIcon', JSON.stringify(btnSvg));
  }, [theme, btnSvg]);

  const data = { theme, handleTheme, btnSvg };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };

export default ThemeContext;
