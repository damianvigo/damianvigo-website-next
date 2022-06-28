import styled from 'styled-components';
// Icons
import SvgBootstrap from '../assets/icon/elements/SvgBootstrap';
import SvgCss from '../assets/icon/elements/SvgCss';
import SvgGit from '../assets/icon/elements/SvgGit';
import SvgHtml from '../assets/icon/elements/SvgHtml';
import SvgJs from '../assets/icon/elements/SvgJs';
import SvgMongo from '../assets/icon/elements/SvgMongo';
import SvgMysql from '../assets/icon/elements/SvgMysql';
import SvgNext from '../assets/icon/elements/SvgNext';
import SvgNode from '../assets/icon/elements/SvgNode';
import SvgReact from '../assets/icon/elements/SvgReact';
import SvgSass from '../assets/icon/elements/SvgSass';
import SvgVSC from '../assets/icon/elements/SvgVSC';
// Utils
import Button from '../utils/Button';
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Components
import BackgroundImage from './BackgroundImage';
import Destacados from './Destacados';
import PerfilDescription from './PerfilDescription';
import Video from './Video';

const Home = ({ theme }) => {
  return (
    <div className={theme}>
      <SectionPerfil
        theme={theme}
        id="perfil"
        className="full-lg-screen section"
      >
        <ArticlePerfil className="container-900px">
          <PerfilDescription />
          <Button wsp talkToMe="Hablemos" />
          <AnimationOnScroll animateIn="animate__backInUp" duration={2}>
            <AsideContainerSvgStyled theme={theme}>
              <SvgJs />
              <SvgReact />
              <SvgNext />
              <SvgCss />
              <SvgHtml />
              <SvgSass />
              <SvgVSC />
              <SvgBootstrap />
              <SvgGit />
              <SvgNode />
              <SvgMongo />
              <SvgMysql />
            </AsideContainerSvgStyled>
          </AnimationOnScroll>
        </ArticlePerfil>
      </SectionPerfil>
      <BackgroundImage
        title="« La simplicidad es la máxima sofisticación »"
        author="Leonardo Da Vinci"
        image="https://i.imgur.com/OOBLd2e.jpg"
        backgroundImageHome
      />
      <Destacados />
      <Video theme={theme} publicOrigin="/video/typing.mp4" />
    </div>
  );
};

export default Home;

const SectionPerfil = styled.section`
  display: flex;
  /*   background-color: ${({ theme }) =>
    theme === 'dark' ? '' : 'var(--third-color)'}; */
`;

const ArticlePerfil = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  > * {
    padding-bottom: 3rem;
  }
  &:first-child {
    padding-top: 5rem;
  }
  button {
    padding: 1rem;
  }
`;

const AsideContainerSvgStyled = styled.aside`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 5rem 0;

  svg {
    /*  transform: scale(1.1); */
    width: clamp(40px, 15vw, 70px);
    height: clamp(40px, 15vw, 70px);
    margin: 1rem;
    &:nth-child(3) {
      fill: ${({ theme }) => (theme === 'dark' ? 'var(--white-color)' : '')};
    }
    &:nth-child(4) {
      fill: ${({ theme }) => (theme === 'dark' ? 'var(--white-color)' : '')};
    }
    &:nth-child(5) {
      fill: ${({ theme }) => (theme === 'dark' ? 'var(--white-color)' : '')};
    }
  }

  @media screen and (min-width: 48em) {
    svg {
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.6);
        cursor: pointer;
      }
    }
  }
`;
