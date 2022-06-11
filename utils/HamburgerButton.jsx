import styled from 'styled-components';
import { useContext } from 'react';
import { useRef } from 'react';

import ThemeContext from '../context/ThemeContext';

const HamburgerButton = ({ setIsActive, isActive }) => {
  let btnMenu = useRef();
  const { theme } = useContext(ThemeContext);

  const handleMenuMobile = (e) => {
    /*    console.log(btnMenu); */
    if (btnMenu.current) {
      setIsActive(!isActive);
    }
  };

  return (
    <>
      <HamburgerButtonStyled
        ref={btnMenu}
        theme={theme}
        id="hamburger-btn"
        className={`hamburger hamburger--stand ${isActive && 'is-active'}`}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        onClick={handleMenuMobile}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </HamburgerButtonStyled>
    </>
  );
};

export default HamburgerButton;

const HamburgerButtonStyled = styled.button`
  .hamburger-inner,
  .hamburger-inner:after,
  .hamburger-inner:before,
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner:after,
  .hamburger.is-active .hamburger-inner:before {
    /*  transition: background-color 0.3s ease-in-out; */
    background-color: ${({ theme }) =>
      theme === 'dark'
        ? 'var(--second-color)'
        : 'var(--first-color)'} !important;
  }

  .hamburger-box {
    height: 6px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
