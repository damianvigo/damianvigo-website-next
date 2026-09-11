import styled from 'styled-components';
import Image from 'next/image';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

import conectarDB from '../../lib/dbConnect';
import Proyect from '../../models/Proyect';

// Components
import { motion } from 'framer-motion';
import Layout from '../../components/layouts/Layout';
import BackgroundImage from '../../components/BackgroundImage';
import SvgLoader from '../../assets/icon/elements/SvgLoader';
import Message from '../../components/Message';
// Hooks
import useNextProps from '../../hooks/useNextProps';
import useLocation from '../../hooks/useLocation';

const Proyectos = ({ proyects }) => {
  const { theme } = useContext(ThemeContext);
  const { db } = useNextProps(proyects);

  const { href } = useLocation();
  // console.log(proyects);

  return (
      <Layout
        theme={theme}
        title="Proyectos | Damián Vigo - Portafolio de desarrollo"
        description="Portafolio de proyectos web desarrollados con React, Next.js y otras tecnologías modernas. Conocé mis trabajos más destacados."
        ogDescription="Portafolio de proyectos web desarrollados con React, Next.js y otras tecnologías modernas."
        ogImage="https://i.imgur.com/fT6QwPm.jpg"
      >
      <BackgroundImage
        image={
          href === 'https://www.damianvigo.com/proyectos'
            ? 'https://damianvigo.com/img/react-fragment.jpg'
            : 'https://i.imgur.com/fT6QwPm.jpg'
        }
        backgroundProyect
      />
      <section className="section full-lg-screen container-1200px ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TitleProyects className="text-center">Proyectos</TitleProyects>
          <IntroText>
            Una selección de proyectos que desarrollé, combinando diseño, funcionalidad y buenas prácticas de desarrollo.
          </IntroText>
        </motion.div>
        {db ? (
          <GridFluid>
            {proyects.map(
              ({
                _id,
                title,
                description,
                img,
                github,
                technologies,
                online,
              }) => {
                const tech = technologies.split(',').map((t) => t.trim());
                return (
                  <ArticleProyectStyled key={_id} theme={theme}>
                    {title !== 'Acortador de URL' ? (
                      <a href={online} target="_blank" rel="noreferrer">
                        <figure>
                          <Image
                            className="proyectImage"
                            src={img}
                            width={500}
                            height={500}
                            alt={title}
                          />
                        </figure>
                      </a>
                    ) : (
                      <figure>
                        <Image
                          className="proyectImage"
                          src={img}
                          width={500}
                          height={500}
                          alt={title}
                        />
                      </figure>
                    )}
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <TagsContainer>
                      {tech.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </TagsContainer>
                    <ButtonsContainer>
                      {title !== 'Acortador de URL' ? (
                        <a href={online} target="_blank" rel="noreferrer">
                          <ButtonPrimary>Ver proyecto</ButtonPrimary>
                        </a>
                      ) : null}
                      <a href={github} target="_blank" rel="noreferrer">
                        <ButtonSecondary theme={theme}>GitHub</ButtonSecondary>
                      </a>
                    </ButtonsContainer>
                  </ArticleProyectStyled>
                );
              }
            )}
          </GridFluid>
        ) : (
          <Message
            msg="Hubo un error al cargar los proyectos 🤔
            Intenta recargar la página"
            bgColor="var(--first-color)"
          />
        )}
      </section>
      <BackgroundImage
        backgroundProyectBottom
        image={
          href === 'https://www.damianvigo.com/proyectos'
            ? 'https://damianvigo.com/img/design.jpg'
            : 'https://i.imgur.com/NNUJ5bj.jpg'
        }
      />
    </Layout>
  );
};

export default Proyectos;

export async function getStaticProps() {
  try {
    await conectarDB();

    const res = await Proyect.find({});

    const proyects = res.map((doc) => {
      const proyect = doc.toObject();
      proyect._id = `${proyect._id}`;
      return proyect;
    });

    return {
      props: { proyects: proyects },
      revalidate: 60,
    };
  } catch (error) {
    return { props: { success: false, error: error.message || 'Error' } };
  }
}

const TitleProyects = styled.h1`
  padding: 2rem 0;
  @media screen and (min-width: 36em) {
    padding: 4rem;
  }
`;

const IntroText = styled.p`
  text-align: center;
  max-width: 600px;
  margin: -2rem auto 2rem;
  font-size: var(--step--1);
  opacity: 0.8;
`;

const ArticleProyectStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 350px;
  min-width: 200px;
  margin: 2rem auto;
  border: 4px solid
    ${(props) => (props.theme === 'dark' ? '#a1b5d8' : 'var(--first-color)')};
  border-radius: 0.5rem;
  text-align: left;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--black-alpha-color-cards)' : 'var(--card-color)'};
  box-shadow: ${({ theme }) =>
    theme === 'dark' ? 'var(--card-shadow-light)' : 'var(--card-shadow)'};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--text-color)'};

  a {
    width: 100%;
    figure {
      span {
        width: 100% !important;
        object-fit: none;
      }
    }
    img {
      width: 100%;
      height: 200px !important;
      object-fit: cover;
      cursor: pointer;
    }
  }

  h2 {
    padding: 1rem;
    font-size: var(--step--1);
  }

  p {
    padding: 1rem;
    margin: 0;
    text-align: center;
  }

  @media screen and (min-width: 576px) {
    &:hover {
      transform: scale(1.03);
      box-shadow: ${({ theme }) =>
        theme === 'dark' ? '0 8px 24px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.2)'};
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
  justify-content: center;
`;

const Tag = styled.span`
  border-radius: 0.5rem;
  background-color: var(--first-color);
  color: var(--second-color);
  padding: 0.3rem 0.8rem;
  font-size: var(--step--2);
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem 1.5rem;
  width: 100%;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

const ButtonPrimary = styled.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: var(--first-color);
  color: var(--second-color);
  border-radius: 0.5rem;
  font-size: var(--step--2);
  font-weight: var(--fontWeightSans-900);
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const ButtonSecondary = styled.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: transparent;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--first-color)'};
  border: thin solid ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--first-color)'};
  border-radius: 0.5rem;
  font-size: var(--step--2);
  font-weight: var(--fontWeightSans-900);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme === 'dark' ? 'var(--light-color)' : 'var(--first-color)'};
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--dark-color)' : 'var(--second-color)'};
  }
`;

const GridFluid = styled.section`
  width: 100%;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
`;
