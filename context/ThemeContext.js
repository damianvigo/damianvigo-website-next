import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
// console.log(ThemeContext);
/* 
const initialTheme = JSON.parse(localStorage.getItem('theme')) || '';

const initialBtnIcon = JSON.parse(localStorage.getItem('btnIcon') || false); */

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [btnSvg, setBtnSvg] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', JSON.stringify('dark'));
      localStorage.setItem('btnIcon', JSON.stringify(true));
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(JSON.parse(localStorage.getItem('theme')));
    }

    if (localStorage.getItem('btnIcon')) {
      setBtnSvg(JSON.parse(localStorage.getItem('btnIcon')));
    }
  }, []);

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
    localStorage.setItem('theme', JSON.stringify(theme));
    localStorage.setItem('btnIcon', JSON.stringify(btnSvg));
  }, [theme, btnSvg]);

  // console.log(theme);

  const data = { theme, handleTheme, btnSvg };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };

export default ThemeContext;
