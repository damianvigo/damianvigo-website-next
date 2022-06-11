import Link from 'next/link';
import SvgFacebook from '../assets/icon/elements/SvgFacebook';
import SvgGitHub from '../assets/icon/elements/SvgGitHub';
import SvgOnlineEducation from '../assets/icon/elements/SvgOnlineEducation';
import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <FooterStyled theme={theme}>
      <SectionFooterStyled theme={theme}>
        <div>
          <Link href="https://platzi.com/p/Damian">
            <a target="_blank" rel="noreferrer">
              <SvgOnlineEducation />
            </a>
          </Link>
        </div>
        <div>
          <Link href="https://github.com/damianvigo">
            <a target="_blank" rel="noreferrer">
              <SvgGitHub />
            </a>
          </Link>
        </div>
        <div>
          <Link href="https://www.facebook.com/ddamianvigo">
            <a target="_blank" rel="noreferrer">
              <SvgFacebook />
            </a>
          </Link>
        </div>
      </SectionFooterStyled>
      <div>
        <p>Damián Vigo © 2022</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  transition: background-color 0.3s ease-in;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--dark-color)' : 'var(--second-color)'};
  /* background-color: var(--third-alpha-color); */
  height: 30vh;
  div {
    p {
      color: ${({ theme }) =>
        theme === 'dark' ? 'var(--second-color)' : 'var(--text-color)'};
      text-align: center;
      margin: 0;
    }
  }
`;

const SectionFooterStyled = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  flex-wrap: wrap;

  @keyframes icon {
    from {
      transform: rotate3d(0, 0, 0, 0);
    }

    to {
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }

  /* .footer__container-icon a:hover {
  animation: icon 0.5s ease;
  color: var(--primary-color);
} */

  div {
    margin-right: 1rem;
    a {
      display: inline-block;
    }
    &:hover {
      animation: icon 1s ease-out infinite both;
    }
    &:nth-child(2) {
      background-color: ${({ theme }) =>
        theme === 'dark' ? 'var(--white-color)' : ''};
      border-radius: ${({ theme }) => (theme === 'dark' ? '20%' : '')};
    }
  }

  svg {
    width: 3rem;
    height: 3rem;
  }
`;
