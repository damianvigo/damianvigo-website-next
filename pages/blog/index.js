import styled from 'styled-components';
// Components
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '../../components/BackgroundImage';
import Layout from '../../components/layouts/Layout';
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Context
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';
// DB
import conectarDB from '../../lib/dbConnect';
import Posts from '../../models/Posts';
import SvgLoader from '../../assets/icon/elements/SvgLoader';
import Message from '../../components/Message';
// Hooks
import useNextProps from '../../hooks/useNextProps';
// Utils

const Blog = ({ posts }) => {
  const { theme } = useContext(ThemeContext);
  const { db } = useNextProps(posts);

  return (
    <Layout
      title="Blog"
      theme={theme}
      description="En esta sección encontrarás artículos sobre mis intereses personales, tales como filosofía de vida, estoicismo, minimalismo y todo lo que considere contenido de valor 🧠💪"
    >
      <div>
        <BackgroundImage
          image="https://i.imgur.com/wYrN8N3.jpg"
          backgroundImageBlog
          blog="Blog"
        />
        <SectionStyledContainer className="section full-lg-screen container-1200px">
          <AnimationOnScroll animateIn="animate__bounceInLeft" duration={2.5}>
            <h2>Desarrollo</h2>
          </AnimationOnScroll>
          {db ? (
            posts.map(
              (post) =>
                post.category !== 'personal' && (
                  <ArticleStyled key={post._id}>
                    <Link href={`/blog/${post.slug}`}>
                      <LinkStyled theme={theme}>
                        <FigureStyled>
                          <Image
                            src={post.img}
                            width={40}
                            height={40}
                            alt={post.title}
                          />
                          <FigCaptionStyled>
                            <span>{post.title}</span>
                            <time>{post.updatedAt}</time>
                          </FigCaptionStyled>
                        </FigureStyled>
                      </LinkStyled>
                    </Link>
                    <hr />
                  </ArticleStyled>
                )
            )
          ) : (
            <Message
              msg="Hubo un error al cargar los posts de la categoría de desarrollo 🤔
              Intenta recargar la página"
              bgColor="var(--first-color)"
            />
          )}
          <AnimationOnScroll animateIn="animate__bounceInRight" duration={2.5}>
            <h2>Personal</h2>
          </AnimationOnScroll>
          {db ? (
            posts.map(
              (post) =>
                post.category !== 'developer' && (
                  <ArticleStyled key={post._id}>
                    <Link href={`/blog/${post.slug}`}>
                      <LinkStyled theme={theme}>
                        <FigureStyled>
                          <Image
                            src={post.img}
                            width={40}
                            height={40}
                            alt={post.title}
                          />
                          <FigCaptionStyled>
                            <span>{post.title}</span>
                            <time>{post.updatedAt}</time>
                          </FigCaptionStyled>
                        </FigureStyled>
                      </LinkStyled>
                    </Link>
                    <hr />
                  </ArticleStyled>
                )
            )
          ) : (
            <Message
              msg="Hubo un error al cargar los posts de la categoría personal 🤔
              Intenta recargar la página"
              bgColor="var(--first-color)"
            />
          )}
        </SectionStyledContainer>
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  try {
    await conectarDB();

    const res = await Posts.find({});

    // console.log(res);

    const posts = res.map((doc) => {
      const post = doc.toObject();
      post._id = `${post._id}`;
      post.createdAt = new Date(post.createdAt).toLocaleDateString();
      post.updatedAt = new Date(post.updatedAt).toLocaleDateString();
      return post;
    });

    return {
      props: {
        posts: posts,
      },
    };
  } catch (error) {
    // console.log(error);
    return { props: { success: false, error: 'Error' } };
  }
}

const SectionStyledContainer = styled.section`
  overflow-x: hidden;
  h2 {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    gap: 1rem;
    justify-content: center;
    div {
      grid-column: 1 / 3;
    }
  }
`;

const ArticleStyled = styled.article`
  cursor: pointer;
  padding: 1rem;
  h2 {
    color: var(--title-color);
  }
  @media screen and (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--title-color)'};
`;

const FigureStyled = styled.figure`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  svg {
    width: var(--step-3);
    height: var(--step-3);
  }
`;

const FigCaptionStyled = styled.figcaption`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  span {
    margin-bottom: 0.3rem;
    font-size: var(--step--1);
    font-weight: 900;
  }

  @media screen and (min-width: 48em) {
    flex-direction: row;
    justify-content: space-between;
    align-content: space-evenly;
  }
`;
