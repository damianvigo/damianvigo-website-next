import styled from 'styled-components';
import Link from 'next/link';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../context/ThemeContext';

// Components
import Image from 'next/image';
import Button from '../utils/Button';

const projects = [
  {
    title: 'Portafolio de Arte',
    description: 'Diseño y maquetación responsive. Desarrollado con React JS.',
    image: 'https://i.imgur.com/0oX7ktW.png',
    imageAlt: 'Portafolio de arte de Adriana Stigliano',
    imageTitle: 'Portfolio Arte',
    liveUrl: 'https://adrianastiglianoarte.netlify.app',
    githubUrl: 'https://github.com/damianvigo/arte-webapp',
    year: '2022',
  },
  {
    title: 'Portafolio Desarrollador',
    description: 'Maquetación responsive sin frameworks.',
    image: 'https://i.imgur.com/V6uS093.jpg',
    imageAlt: 'Portafolio CV',
    imageTitle: 'Porfolio DVDEV',
    liveUrl: 'https://portfolio-dv.netlify.app/',
    githubUrl: 'https://github.com/damianvigo/portfolio-cv',
    year: '2021',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 },
  },
};

const Destacados = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <DestacadosSectionStyled theme={theme} className="section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <DestacadosStyled theme={theme}>Destacados</DestacadosStyled>
      </motion.div>

      <GridStyled
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <CardStyled key={project.title} variants={cardVariants} theme={theme}>
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ImageContainerStyled>
                <Image
                  src={project.image}
                  width={600}
                  height={340}
                  alt={project.imageAlt}
                  title={project.imageTitle}
                />
              </ImageContainerStyled>
            </a>
            <CardContentStyled theme={theme}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <CardFooterStyled theme={theme}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Código del proyecto
                </a>
                <small>{project.year}</small>
              </CardFooterStyled>
            </CardContentStyled>
          </CardStyled>
        ))}
      </GridStyled>

      <Button more moreDescription="Ver más" />
    </DestacadosSectionStyled>
  );
};

export default Destacados;

const DestacadosSectionStyled = styled.section`
  background-color: ${({ theme }) =>
    theme === 'dark' ? '' : 'var(--second-color)'};
  text-align: center;
`;

const DestacadosStyled = styled.h2`
  margin: 1rem auto;
  text-align: center;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--second-color)' : '#222222'};
`;

const GridStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media screen and (min-width: 50em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardStyled = styled(motion.article)`
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--first-color)' : 'var(--white-color)'};
  box-shadow: ${({ theme }) =>
    theme === 'dark'
      ? '0 4px 12px rgba(0, 0, 0, 0.3)'
      : '0 4px 12px rgba(0, 0, 0, 0.1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) =>
      theme === 'dark'
        ? '0 8px 24px rgba(0, 0, 0, 0.5)'
        : '0 8px 24px rgba(0, 0, 0, 0.15)'};
  }
`;

const ImageContainerStyled = styled.div`
  width: 100%;
  overflow: hidden;

  span {
    display: block !important;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${CardStyled}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContentStyled = styled.div`
  padding: 1.5rem;
  text-align: left;

  h3 {
    font-size: var(--step-0);
    margin-bottom: 0.5rem;
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : '#222222'};
  }

  p {
    font-size: var(--step--1);
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : '#444'};
    margin-bottom: 1rem;
  }
`;

const CardFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--second-color)' : '#444'};

  a {
    font-size: var(--step--2);
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)'};
    text-decoration: underline;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  small {
    font-size: var(--step--2);
    opacity: 0.6;
    color: inherit;
  }
`;
