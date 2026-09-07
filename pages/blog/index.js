import styled from 'styled-components';
// Components
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '../../components/BackgroundImage';
import Layout from '../../components/layouts/Layout';
import { motion } from 'framer-motion';
// Context
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';
// DB
import conectarDB from '../../lib/dbConnect';
import Posts from '../../models/Posts';
import Message from '../../components/Message';
// Hooks
import useNextProps from '../../hooks/useNextProps';
import useLocation from '../../hooks/useLocation';
import { format } from 'date-fns';
// Utils

const Blog = ({ posts }) => {
  const { theme } = useContext(ThemeContext);
  const { db } = useNextProps(posts);
  const { href } = useLocation();

  return (
    <Layout
      title="Blog"
      theme={theme}
      description="En esta sección encontrarás artículos sobre mis intereses personales, tales como filosofía de vida, estoicismo, minimalismo y todo lo que considere contenido de valor 🧠💪"
      ogDescription="En esta sección encontrarás artículos sobre mis intereses personales, tales como filosofía de vida, estoicismo, minimalismo y todo lo que considere contenido de valor 🧠💪"
      ogImage="https://i.imgur.com/wYrN8N3.jpg"
    >
      <div>
        <BackgroundImage
          image={
            href === 'https://www.damianvigo.com/blog'
              ? 'https://damianvigo.com/img/blog.jpg'
              : 'https://i.imgur.com/wYrN8N3.jpg'
          }
          backgroundImageBlog
          blog="Blog"
        />
        <SectionStyledContainer className="section full-lg-screen container-1200px">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ textAlign: 'center' }}>Desarrollo</h2>
          </motion.div>
          {db ? (
            posts.map(
              (post) =>
                post.category !== 'personal' && (
                  <ArticleStyled key={post._id}>
                    <Link href={`/blog/${post.slug}`}>
                      <LinkStyled theme={theme}>
                        <FigureStyled>
                           <img
                              src={post.img}
                              style={{ width: 40, height: 40 }}
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ textAlign: 'center' }}>Personal</h2>
          </motion.div>
          {db ? (
            posts.map(
              (post) =>
                post.category !== 'developer' && (
                  <ArticleStyled key={post._id}>
                    <Link href={`/blog/${post.slug}`}>
                      <LinkStyled theme={theme}>
                        <FigureStyled>
                           <img
                              src={post.img}
                              style={{ width: 40, height: 40 }}
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
      /*     post.createdAt = new Date(post.createdAt).toLocaleDateString();
      post.updatedAt = new Date(post.updatedAt).toLocaleDateString(); */
      post.createdAt = format(new Date(post.createdAt), 'dd-MM-yyyy');
      post.updatedAt = format(new Date(post.updatedAt), 'dd-MM-yyyy');
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
  div {
    padding: 2rem 0;
  }
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
  h2 {
    color: var(--title-color);
  }
  @media screen and (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const LinkStyled = styled.div`
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

