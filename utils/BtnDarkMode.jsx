import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

// Icons
import SvgMoon from '../assets/icon/elements/SvgMoon';
import SvgSun from '../assets/icon/elements/SvgSun';

const Btn = styled.button`
  position: fixed;
  cursor: pointer;
  background-color: var(--high-black-alpha-color);
  svg {
    position: fixed;
    width: var(--step-4);
    height: var(--step-4);
    left: 3vw;
    bottom: calc(var(--header-height) + 2vw);
    transition: opacity 0.5s ease-out;
    :hover {
      opacity: 0.8;
    }
    @media screen and (min-width: 64em) {
      bottom: 2vh;
      left: 2vw;
    }
  }
`;

const BtnDarkMode = () => {
  const { handleTheme, btnSvg } = useContext(ThemeContext);
  // console.log(btnSvg);
  return (
    <>
      {btnSvg ? (
        <Btn title="btn-light">
          <SvgSun handleTheme={handleTheme} />
        </Btn>
      ) : (
        <Btn title="btn-dark">
          <SvgMoon onClick={handleTheme} />
        </Btn>
      )}
    </>
  );
};

export default BtnDarkMode;
