import styled from 'styled-components';
import { motion } from 'framer-motion';
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
// Components
import BackgroundImage from './BackgroundImage';
import Destacados from './Destacados';
import PerfilDescription from './PerfilDescription';
import Video from './Video';
import useLocation from '../hooks/useLocation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const Home = ({ theme }) => {
  const { href } = useLocation();

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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AsideContainerSvgStyled theme={theme}>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgJs /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgReact /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgNext /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgCss /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgHtml /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgSass /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgVSC /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgBootstrap /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgGit /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgNode /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgMongo /></motion.div>
              <motion.div variants={itemVariants} animate={floatingAnimation}><SvgMysql /></motion.div>
            </AsideContainerSvgStyled>
          </motion.div>
        </ArticlePerfil>
      </SectionPerfil>
      <BackgroundImage
        title="« La simplicidad es la máxima sofisticación »"
        author="Leonardo Da Vinci"
        image={
          href === 'https://www.damianvigo.com/'
            ? 'https://damianvigo.com/img/minimalist.jpg'
            : 'https://i.imgur.com/OOBLd2e.jpg'
        }
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

  div {
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: clamp(40px, 15vw, 70px);
    height: clamp(40px, 15vw, 70px);
    
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
    div {
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.6);
        cursor: pointer;
      }
    }
  }
`;
