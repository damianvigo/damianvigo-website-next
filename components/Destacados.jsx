import Image from 'next/image';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import ButtonVerMas from '../utils/ButtonVerMas';
import { useContext } from 'react';
import Link from 'next/link';

const Destacados = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <DestacadosSectionStyled className="section">
      <DestacadosStyled theme={theme}>Destacados</DestacadosStyled>
      <SeccionDestacada>
        <ArticleDestacado theme={theme}>
          <h3>Portafolio de Arte</h3>
          <p>
            Diseño y maquetación <i>responsive</i>. Desarrollado con{' '}
            <i>React JS</i>.
          </p>
          <br />
          <small>2022</small>
        </ArticleDestacado>
        <ArticleDestacado theme={theme}>
          <a
            href="https://adrianastigliano.art/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://i.imgur.com/0oX7ktW.png"
              width={1920}
              height={937}
              alt="Portafolio de arte de Adriana Stigliano"
              title="Portfolio Arte"
            />
          </a>
        </ArticleDestacado>
        <ArticleDestacado theme={theme}>
          <h3>Portafolio Desarrollador</h3>
          <p>
            Maquetación <i>responsive</i> solo <i>HTML CSS</i> y
            <i>Vanilla Javascript</i>.
          </p>
          <small>2022</small>
        </ArticleDestacado>
        <ArticleDestacado theme={theme}>
          <a
            href="https://portfolio-dv.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://i.imgur.com/V6uS093.jpg"
              width={1605}
              height={880}
              alt="Portafolio CV"
              title="Porfolio DVDEV"
            />
          </a>
        </ArticleDestacado>
      </SeccionDestacada>
      <ButtonVerMas />
    </DestacadosSectionStyled>
  );
};

export default Destacados;

const DestacadosSectionStyled = styled.section`
  background-color: var(--third-color);
`;

const DestacadosStyled = styled.h2`
  margin: 1rem auto;
  text-align: center;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--second-color)' : 'var(--title-color)'};
`;

const SeccionDestacada = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  /*  margin: 0 1rem */

  @media screen and (min-width: 800px) {
    flex-direction: row;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    gap: 2rem;
    align-items: stretch;
    padding: 2rem;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
  }
`;

const ArticleDestacado = styled.article`
  margin: 2rem 0;
  padding: 1rem;
  transition: background-color 0.3s ease-in-out;
  /*  background-color: var(--second-color); */
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--first-color)' : 'var(--second-color)'};
  box-shadow: 0 2px 4px rgb(0 0 0 / 75%);
  border: thin solid #000;
  text-align: center;
  max-width: 600px;

  h3 {
    /*   color: var(--title-color); */
    font-size: var(--step-1);
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--title-color)'};
  }

  p {
    /*     color: var(--text-color); */
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--text-color)'};
  }
  text-align: center;
  small {
    width: 100%;
    display: inline-block;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 45%;
    transition: opacity 0.3s ease-in-out;

    &:nth-child(2) {
      &:hover {
        opacity: 0.7;
      }
      cursor: pointer;
    }

    &:nth-child(3) {
      order: 1;
    }
    &:nth-child(4) {
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
    &:hover {
    }
  }

  @media screen and (min-width: 1200px) {
    flex: 0 1 35%;
  }
`;
