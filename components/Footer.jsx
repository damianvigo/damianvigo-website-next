import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Link from 'next/link';

// Icons
import SvgGitHub from '../assets/icon/elements/SvgGitHub';
import SvgNext from '../assets/icon/elements/SvgNext';
import SvgPlatzi from '../assets/icon/elements/SvgPlatzi';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <FooterStyled theme={theme}>
      <SectionFooterStyled theme={theme}>
        <div>
          <Link href="https://github.com/damianvigo" title="github" target="_blank" rel="noreferrer">
            <SvgGitHub />
          </Link>
        </div>
        <div>
          <p>Damián Vigo © {new Date().getFullYear()}</p>
        </div>
      </SectionFooterStyled>
      <ContainerSvgNextFooter theme={theme}>
        <small>powered by</small>
        <Link href="https://nextjs.org" title="next.js" target="_blank" rel="noreferrer">
          <SvgNext />
        </Link>
      </ContainerSvgNextFooter>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  transition: background-color 0.3s ease-in;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--dark-color)' : 'var(--first-color)'};
  border-top: thin solid
    ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--second-color)'};
  margin-bottom: var(--header-height);
  div {
    p {
      color: ${({ theme }) =>
        theme === 'dark' ? 'var(--second-color)' : 'var(--second-color)'};
      text-align: center;
      margin: 0;
      font-size: var(--step--2);
    }
  }
  @media screen and (min-width: 64em) {
    margin-bottom: 0;
  }
`;

const SectionFooterStyled = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  flex-wrap: wrap;

  @keyframes icon {
    from {
      transform: rotate3d(0, 0, 0, 0);
    }

    to {
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }

  div {
    margin-right: 1rem;
    a {
      display: inline-block;
    }
    &:nth-child(1) {
      background-color: ${({ theme }) =>
        theme === 'dark' ? 'var(--white-color)' : 'var(--second-color)'};
      border-radius: ${({ theme }) => (theme === 'dark' ? '20%' : '')};
    }
  }

  svg {
    width: clamp(5px, 15vw, 35px);
    height: clamp(5px, 15vw, 35px);
  }

  @media screen and (min-width: 48em) {
    div:nth-child(1):hover svg {
      animation: icon 1s ease-out infinite both;
    }
  }
`;

const ContainerSvgNextFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  small {
    color: ${({ theme }) => (theme === 'dark' ? 'var(--light-color)' : 'var(--second-color)')};
  }

  a {
    cursor: pointer;
    svg {
      width: clamp(40px, 15vw, 70px);
      height: clamp(40px, 15vw, 70px);
      margin-left: 0.4rem;
       color: ${({ theme }) => (theme === 'dark' ? 'var(--white-color)' : 'var(--second-color)')};
       fill: ${({ theme }) => (theme === 'dark' ? 'var(--white-color)' : 'var(--second-color)')};
    }
  }
`;
