import styled from 'styled-components';
// Components
import Link from 'next/link';
import BackgroundImage from '../../components/BackgroundImage';
import Layout from '../../components/layouts/Layout';
import SvgCss from '../../assets/icon/elements/SvgCss';
// Context
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';
// DB
import conectarDB from '../../lib/dbConnect';
import PostDeveloper from '../../models/PostDeveloper';

const Blog = ({ postsDeveloper }) => {
  console.log(postsDeveloper);
  const { theme } = useContext(ThemeContext);
  return (
    <Layout title="Blog" theme={theme}>
      <div>
        <BackgroundImage
          image="https://i.imgur.com/SpUDEmn.jpg"
          backgroundImageBlog
          blog="Blog"
        />
        <SectionStyledContainer className="section full-lg-screen container-1200px">
          <h2>Desarrollo</h2>
          <ArticleStyled>
            <Link href={`/blog/${postsDeveloper[0].slug}`}>
              <LinkStyled>
                <FigureStyled>
                  <SvgCss />
                  <FigCaptionStyled>
                    <span>{postsDeveloper[0].postDeveloper}</span>
                    <time>6/19/2022</time>
                  </FigCaptionStyled>
                </FigureStyled>
              </LinkStyled>
            </Link>
            <hr />
          </ArticleStyled>
          <h2>Personal</h2>
          <ArticleStyled>
            <Link href="">
              <LinkStyled>
                <FigureStyled>
                  <SvgCss />
                  <FigCaptionStyled>
                    <span>La Magia del ayuno</span>
                    <time>6/19/2022</time>
                  </FigCaptionStyled>
                </FigureStyled>
              </LinkStyled>
            </Link>
            <hr />
          </ArticleStyled>
        </SectionStyledContainer>
      </div>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps() {
  try {
    await conectarDB();

    const res = await PostDeveloper.find({});
    console.log(res);

    const postsDeveloper = res.map((doc) => {
      const postDeveloper = doc.toObject();
      postDeveloper._id = `${postDeveloper._id}`;
      return postDeveloper;
    });

    //  console.log(res);

    return {
      props: { postsDeveloper: postsDeveloper },
    };
  } catch (error) {
    console.log(error);
    return { props: { success: false, error: 'Error' } };
  }
}

const SectionStyledContainer = styled.section`
  h2 {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    gap: 1rem;
    justify-content: center;
    h2 {
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
    cursor: auto !important;
  }
  time {
    cursor: auto !important;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
