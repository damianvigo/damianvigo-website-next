import styled from 'styled-components';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
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
  const [hasApiKey, setHasApiKey] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const key = localStorage.getItem('API_KEY');
    setHasApiKey(!!key);
  }, []);

  return (
    <HeaderStyled
      theme={theme}
      $position={`${
        pathname === '/' || pathname === '/blog/[slug]'
          ? 'sticky'
          : pathname === '/contacto'
          ? 'static'
          : 'fixed'
      }`}
    >
      <section className="container-flex">
        <div>
          <Link href="/" id="dvdev" ref={txt} className={TextAnimatedModule.dvdev}>
            DVDEV
          </Link>
        </div>
        <Nav theme={theme} isActive={isActive} setIsActive={setIsActive} />
        {hasApiKey && (
          <AdminLink href="/admin" theme={theme}>Admin</AdminLink>
        )}
        <HamburgerButton setIsActive={setIsActive} isActive={isActive} />
      </section>
    </HeaderStyled>
  );
};

export default Header;

const AdminLink = styled(Link)`
  font-size: var(--step--2);
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)'};
  text-decoration: none;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
  @media screen and (min-width: 64em) {
    margin-left: 1rem;
  }
`;

const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  padding: 0.5rem;
  width: 100%;
  height: var(--header-height);
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

  @media screen and (min-width: 64em) {
    transition: background-color 0.3s ease-in;
    position: ${({ $position }) => $position};
    top: -0.5rem;
    padding-top: 1.5rem;
    padding-bottom: 3rem;
  }
`;
