import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';

import conectarDB from '../../lib/dbConnect';
import Proyect from '../../models/Proyect';

// Components
import Layout from '../../components/layouts/Layout';
import BackgroundImage from '../../components/BackgroundImage';
import SvgLoader from '../../assets/icon/elements/SvgLoader';

const Proyectos = (props) => {
  const [loading, setLoading] = useState(false);
  console.log(props);

  useEffect(() => {
    if (props.proyects.length > 0) {
      setTimeout(() => {
        setLoading(!loading);
      }, 1000);
    }
  }, []);

  const { theme } = useContext(ThemeContext);
  /* console.log(theme); */
  console.log(loading);
  return (
    <Layout theme={theme}>
      <BackgroundImage
        backgroundProyect
        image="https://i.imgur.com/fT6QwPm.jpg"
      />
      <section className="section full-lg-screen container-1200px ">
        <TitleProyects className="text-center">Proyectos</TitleProyects>
        {!loading && <SvgLoader />}
        {loading && (
          <GridFluid>
            <ArticleProyectStyled theme={theme}>
              <Link href="/">
                <figure>
                  <Image
                    className="proyectImage"
                    src="https://picsum.photos/400/500"
                    width={500}
                    height={500}
                    alt="test"
                  />
                </figure>
              </Link>
              <ArticleDescriptionStyled>
                <h5>React</h5>
                <p>Webapp de registro de gastos.</p>
                <ul>
                  <li>Nodejs</li>
                  <li>Express</li>
                  <li>Firebase</li>
                  <li>Firebase</li>
                  <li>Firebase</li>
                </ul>
                <Link href="/">
                  <a>Código del proyecto</a>
                </Link>
              </ArticleDescriptionStyled>
            </ArticleProyectStyled>
            <ArticleProyectStyled theme={theme}>
              <Link href="/">
                <figure>
                  <Image
                    className="proyectImage"
                    src="https://picsum.photos/400/500"
                    width={500}
                    height={500}
                    alt="test"
                  />
                </figure>
              </Link>
              <ArticleDescriptionStyled>
                <h5>React</h5>
                <p>Webapp de registro de gastos.</p>
                <ul>
                  <li>Nodejs</li>
                  <li>Express</li>
                  <li>Firebase</li>
                </ul>
                <Link href="/">
                  <a>Código del proyecto</a>
                </Link>
              </ArticleDescriptionStyled>
            </ArticleProyectStyled>
          </GridFluid>
        )}
      </section>
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
  width: 100%;
  max-width: 320px;
  min-width: 200px;
  margin: 2rem auto;
  border: 5px solid
    ${(props) =>
      props.theme === 'dark' ? 'var(--white-color)' : 'var(--first-color)'};
  border-radius: 0.5rem;
  text-align: left;
  background-color: var(--background-color);
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
  img {
    width: 100%;
    /*   height: 300px !important; */
    object-fit: cover;
    cursor: pointer;
  }

  @media screen and (min-width: 576px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ArticleDescriptionStyled = styled.div`
  background-color: var(--card-color);
  > * {
    padding: 1rem;
  }
  p {
    margin: 0;
  }
  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: underline;
  }
  ul {
    margin: 0 auto;

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
`;

const GridFluid = styled.section`
  /* margin: 1rem auto; */
  width: 100%;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
