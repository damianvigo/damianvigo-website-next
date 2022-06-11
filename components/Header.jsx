import Nav from './Nav';
import styled from 'styled-components';
import Link from 'next/link';
import HamburgerButton from '../utils/HamburgerButton';
import { useState } from 'react';

const Header = ({ styckyHome, theme }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <HeaderStyled theme={theme} styckyHome={styckyHome}>
      <section className="container-flex">
        <div>
          <Link href="/">
            <a>DVDEV</a>
          </Link>
        </div>
        <Nav theme={theme} isActive={isActive} />
        <HamburgerButton setIsActive={setIsActive} isActive={isActive} />
        {/*       <div>
          <Link href="/admin">
            <a>admin</a>
          </Link>
        </div> */}
      </section>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  padding: 0.5rem;
  width: 100%;
  height: var(--header-height);
  /*  background-color: var(--second-color); */
  transition: background-color 0.3s ease-in;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--dark-color)' : 'var(--second-color)'};

  .container-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      a {
        color: ${({ theme }) =>
          theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)'};
        font-weight: var(--fontWeightSans-900);
        font-size: var(--step-0);
      }
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    transition: background-color 0.3s ease-in;
    position: ${({ styckyHome }) => (styckyHome ? 'sticky' : 'fixed')};
    top: -0.5rem;
    padding-top: 1.5rem;
    padding-bottom: 3rem;
  }
`;
