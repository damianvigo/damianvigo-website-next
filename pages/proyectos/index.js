import styled from 'styled-components';
import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';

import conectarDB from '../../lib/dbConnect';
import Proyect from '../../models/Proyect';

// Components
import Layout from '../../components/layouts/Layout';
import BackgroundImage from '../../components/BackgroundImage';
import SvgLoader from '../../assets/icon/elements/SvgLoader';
import Head from 'next/head';

const Proyectos = ({ proyects }) => {
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  // console.log(proyects);

  /*   useEffect(() => {
    if (proyects.length > 0) {
      setLoading(!loading);
    }
  }, [proyects]); */

  return (
    <Layout theme={theme} title="Proyectos">
      <BackgroundImage
        backgroundProyect
        image="https://i.imgur.com/fT6QwPm.jpg"
      />
      <section className="section full-lg-screen container-1200px ">
        <TitleProyects className="text-center">Proyectos</TitleProyects>
        {!loading && <SvgLoader />}
        {loading && (
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
                let tech = technologies.split(',');
                return (
                  <ArticleProyectStyled key={_id} theme={theme}>
                    <a href={online} target="_blank" rel="noreferrer">
                      <figure>
                        <Image
                          className="proyectImage"
                          src={img}
                          width={500}
                          height={500}
                          alt="test"
                        />
                      </figure>
                    </a>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <ul>
                      {tech[0] && <li>{tech[0]}</li>}
                      {tech[1] && <li>{tech[1]}</li>}
                      {tech[2] && <li>{tech[2]}</li>}
                      {tech[3] && <li>{tech[3]}</li>}
                    </ul>
                    <a href={github} target="_blank" rel="noreferrer">
                      Código del proyecto
                    </a>
                  </ArticleProyectStyled>
                );
              }
            )}
          </GridFluid>
        )}
      </section>
      <BackgroundImage
        backgroundProyectBottom
        image="https://i.imgur.com/NNUJ5bj.jpg"
      />
    </Layout>
  );
};

export default Proyectos;

export async function getServerSideProps() {
  try {
    await conectarDB();

    const res = await Proyect.find({});

    const proyects = res.map((doc) => {
      const proyect = doc.toObject();
      proyect._id = `${proyect._id}`;
      return proyect;
    });

    //  console.log(res);

    return {
      props: { proyects: proyects },
    };
  } catch (error) {
    console.log(error);
    return { props: { success: false, error: 'Error' } };
  }
}

const TitleProyects = styled.h1`
  @media screen and (min-width: 36em) {
    padding: 4rem;
  }
`;

const ArticleProyectStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 300px;
  min-width: 200px;
  margin: 2rem auto;
  border: 5px solid
    ${(props) =>
      props.theme === 'dark' ? 'var(--white-color)' : 'var(--first-color)'};
  border-radius: 0.5rem;
  text-align: left;
  background-color: var(--card-color);
  box-shadow: ${({ theme }) =>
    theme === 'dark' ? 'var(--card-shadow-light)' : 'var(--card-shadow)'};
  transition: transform 0.3s ease-in, opacity 0.3s ease-in-out;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--first-color)' : 'var(--text-color)'};
  /*   @keyframes zoomCard {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1.2);
    }
  } */

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

  ul {
    margin: 0 auto;
    width: 100%;
    padding: 1rem;
    li {
      list-style-type: circle;
      border-radius: 0.5rem;
      background-color: var(--first-color);
      color: var(--second-color);
      list-style-position: inside;
      padding: 0.4rem;
      margin-bottom: 0.3rem;
    }
  }

  a:last-child {
    display: block;
    padding: 1rem;
    text-decoration: underline;
    &:visited {
      color: var(--link-color);
      text-decoration: dotted;
    }
    &:active {
      transform: scale(1.1);
    }
  }

  /*   @media screen and (min-width: 768px) {
    a {
      width: 100%;
      figure {
        span {
          width: 100% !important;
          object-fit: none;
        }
      }
      img {
        height: 200px !important;
      }
    }
  } */

  @media screen and (min-width: 576px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const GridFluid = styled.section`
  /* margin: 1rem auto; */
  width: 100%;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
`;
