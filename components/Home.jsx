import styled from 'styled-components';
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
import Button from '../utils/Button';
import BackgroundImage from './BackgroundImage';
import Destacados from './Destacados';
import Header from './Header';
import HeroImage from './HeroImage';
import PerfilDescription from './PerfilDescription';

const Home = ({ theme }) => {
  /*   console.log(theme); */

  return (
    <div className={theme}>
      <SectionPerfil id="perfil" className="full-lg-screen section">
        <ArticlePerfil className="container-900px">
          <PerfilDescription />
          <Button wsp talkToMe="Hablemos" />
          <AsideContainerSvgStyled>
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
        </ArticlePerfil>
      </SectionPerfil>
      <BackgroundImage
        title="« La simplicidad es la máxima sofisticación »"
        author="Leonardo Da Vinci"
      />
      <Destacados />
    </div>
  );
};

export default Home;

const SectionPerfil = styled.section`
  display: flex;
  background-color: var(--third-color);
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
    padding-top: 0;
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
  }

  @media screen and (min-width: 768px) {
    @keyframes zoomIn {
      0% {
        transform: scale(1);
      }

      100% {
        transform: scale(1.8);
      }
    }

    svg {
      &:hover {
        animation: zoomIn 0.5s ease-in both;
        cursor: pointer;
      }
    }
  }
`;
