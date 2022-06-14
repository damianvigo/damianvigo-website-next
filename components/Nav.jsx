import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLink } from '../utils/NavLink';

const Nav = ({ theme, isActive, setIsActive }) => {
  const [isHome, setIsHome] = useState('');

  // console.log(isActive);

  const closeMenu = (e) => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const home = window.location.pathname;
    setIsHome(home);
  }, [isHome]);

  return isHome === '/' ? (
    <NavStyled theme={theme} className={`${isActive && 'is-active'}`}>
      <Link href="/proyectos">Proyectos</Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/contacto">
        <a>Contacto</a>
      </Link>
    </NavStyled>
  ) : (
    <NavStyled
      onClick={closeMenu}
      theme={theme}
      className={`${isActive && 'is-active'}`}
    >
      <Link href="/">
        <a>Bienvenido</a>
      </Link>
      <NavLink href="/proyectos">Proyectos</NavLink>
      {/* <Link href="/proyectos">Proyectos</Link> */}
      <NavLink href="/blog">Blog</NavLink>
      {/*     <Link href="/blog">
        <a>Blog</a>
      </Link> */}
      <NavLink href="/contacto">Contacto</NavLink>
      {/*   <Link href="/contacto">
        <a>Contacto</a>
      </Link> */}
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
  /*   background-color: var(--second-color); */
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
    /*  color: var(--first-color); */
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)'};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) =>
        theme === 'dark' ? 'var(--first-color)' : 'var(--second-color)'};
      background-color: ${({ theme }) =>
        theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)'};
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
        color: ${({ theme }) =>
          theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)'};
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
