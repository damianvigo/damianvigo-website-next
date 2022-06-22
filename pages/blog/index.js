import styled from 'styled-components';
// Components
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '../../components/BackgroundImage';
import Layout from '../../components/layouts/Layout';
// Context
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';
// DB
import conectarDB from '../../lib/dbConnect';
import Posts from '../../models/Posts';
import SvgLoader from '../../assets/icon/elements/SvgLoader';

const Blog = ({ posts }) => {
  /*   const [loading, setLoading] = useState(false); */
  console.log(posts);
  const { theme } = useContext(ThemeContext);

  if (!posts) {
    return <SvgLoader />;
  }

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
          {posts.length > 0 &&
            posts.map(
              (post) =>
                post.category !== 'personal' && (
                  <ArticleStyled key={post._id}>
                    <Link href={`/blog/${post.slug}`}>
                      <LinkStyled>
                        <FigureStyled>
                          <Image
                            src={post.img}
                            width={40}
                            height={40}
                            alt="icono responsivo"
                          />
                          <FigCaptionStyled>
                            <span>{post.title}</span>
                            <time>{post.createdAt}</time>
                          </FigCaptionStyled>
                        </FigureStyled>
                      </LinkStyled>
                    </Link>
                    <hr />
                  </ArticleStyled>
                )
            )}
          <h2>Personal</h2>
          {posts.length > 0 &&
            posts.map(
              (post) =>
                post.category !== 'developer' && (
                  <ArticleStyled key={post._id}>
                    <Link href={`/blog/${post.slug}`}>
                      <LinkStyled>
                        <FigureStyled>
                          <Image
                            src={post.img}
                            width={40}
                            height={40}
                            alt="icono responsivo"
                          />
                          <FigCaptionStyled>
                            <span>{post.title}</span>
                            <time>{post.createdAt}</time>
                          </FigCaptionStyled>
                        </FigureStyled>
                      </LinkStyled>
                    </Link>
                    <hr />
                  </ArticleStyled>
                )
            )}
        </SectionStyledContainer>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    await conectarDB();

    const res = await Posts.find({});

    const posts = res.map((doc) => {
      const post = doc.toObject();
      post._id = `${post._id}`;
      post.createdAt = new Date(post.createdAt).toLocaleDateString();
      return post;
    });

    return {
      props: {
        posts: posts,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: { success: false, error: 'Error' } };
  }
}

export default Blog;

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
