import styled from 'styled-components';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

// Utils
import TextAnimated from '../utils/TextAnimated';
import TextAnimatedModule from '../styles/TextAnimated.module.css';
import HamburgerButton from '../utils/HamburgerButton';

// Components
import Nav from './Nav';

const Header = ({ theme }) => {
  const txt = useRef();
  TextAnimated(txt);
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  return (
    <HeaderStyled
      theme={theme}
      position={`${
        pathname === '/' || pathname === '/blog/[slug]'
          ? 'sticky'
          : pathname === '/contacto'
          ? 'static'
          : 'fixed'
      }`}
    >
      <section className="container-flex">
        <div>
          <Link href="/">
            <a id="dvdev" ref={txt} className={TextAnimatedModule.dvdev}>
              DVDEV
            </a>
          </Link>
        </div>
        <Nav theme={theme} isActive={isActive} setIsActive={setIsActive} />
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
    theme === 'dark' ? 'var(--first-color)' : 'var(--second-color)'};
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

  @media screen and (min-width: 48em) {
  }

  @media screen and (min-width: 64em) {
    transition: background-color 0.3s ease-in;
    position: ${({ position }) => position};
    top: -0.5rem;
    padding-top: 1.5rem;
    padding-bottom: 3rem;
  }
`;
