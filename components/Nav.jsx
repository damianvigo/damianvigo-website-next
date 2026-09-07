import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLink } from '../utils/NavLink';

const Nav = ({ theme, isActive, setIsActive }) => {
  const [isHome, setIsHome] = useState('');
  const [hasApiKey, setHasApiKey] = useState(false);

  const closeMenu = (e) => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const home = window.location.pathname;
    setIsHome(home);
    const key = localStorage.getItem('API_KEY');
    setHasApiKey(!!key);
  }, [isHome]);

  return isHome === '/' ? (
    <NavStyled theme={theme} className={`${isActive && 'is-active'}`}>
      <Link href="/proyectos">Proyectos</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/cv">Asesoría de CV</Link>
      <Link href="/contacto">Contacto</Link>
      {hasApiKey && <Link href="/admin">Admin</Link>}
    </NavStyled>
  ) : (
    <NavStyled
      onClick={closeMenu}
      theme={theme}
      className={`${isActive && 'is-active'}`}
    >
      <Link href="/">Bienvenido</Link>
      <NavLink href="/proyectos">Proyectos</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/cv">Asesoría de CV</NavLink>
      <NavLink href="/contacto">Contacto</NavLink>
      {hasApiKey && <NavLink href="/admin">Admin</NavLink>}
    </NavStyled>
  );
};

export default Nav;

const NavStyled = styled.nav`
  position: fixed;
  left: 0;
  bottom: var(--header-height);
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--first-color)' : 'var(--second-color)'};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;

  a {
    padding: 1rem;
    font-size: var(--step--1);
    font-weight: var(--fontWeight-400);
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)'};
    cursor: pointer;
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
  }

  &.is-active {
    opacity: 1;
    pointer-events: auto;
  }

  @media screen and (min-width: 64em) {
    position: static;
    width: auto;
    flex-direction: row;
    opacity: 1;
    pointer-events: auto;
    transition: background-color 0.3s ease-in;
    a {
      padding: 0 1rem;
      transition: transform 0.3s ease-in-out;
      &:hover {
        font-weight: var(--fontWeightSans-900);
        transform: scale(1.1);
        background-color: transparent;
      }
      &.active {
        font-weight: var(--fontWeightSans-900);
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
`;
