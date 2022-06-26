import styled from 'styled-components';
// Components
import Link from 'next/link';
import Layout from '../../../components/layouts/Layout';
import conectarDB from '../../../lib/dbConnect';
import Post from '../../../models/Posts';
import { useRouter } from 'next/router';
// Context
import { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import Custom404 from '../../404';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ post, success, error }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!post) {
      setLoading(!loading);
    }
  }, [post, loading]);

  console.log(post);
  console.log(error);
  const router = useRouter();
  const { slug } = router.query;

  const { theme } = useContext(ThemeContext);

  if (!success) {
    return <Custom404 error={error} />;
  }

  const { markdown } = post;

  return (
    <Layout>
      <section className="section full-lg-screen">
        <ArticleContainerText theme={theme} className="container-900px">
          <div>
            <ReactMarkdown linkTarget="_blank">{markdown}</ReactMarkdown>
          </div>
        </ArticleContainerText>
      </section>
    </Layout>
  );
};

export default BlogPost;

export async function getServerSideProps({ params }) {
  console.log(params);
  try {
    await conectarDB();

    const post = await Post.findOne({ slug: params.slug }).lean();

    if (!post) {
      return {
        props: {
          succes: false,
          error: 'No existe este post 🙄',
        },
      };
    }

    post._id = post._id.toString();
    post.createdAt = new Date(post.createdAt).toLocaleDateString();

    return {
      props: {
        success: true,
        post: post,
      },
    };
  } catch (error) {
    console.log(error);
    if (error.kind === 'ObjectId') {
      return { props: { success: false, error: 'Id no válido' } };
    }
    return { props: { success: false, error: 'Error' } };
  }
}

const ArticleContainerText = styled.article`
  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  div > * {
    line-height: 2.2rem;
    /* padding-top: 2.5rem; */
    /*   margin-left: 5rem;
    margin-right: 5rem; */
    p {
      margin: 2rem;
    }
    a {
      color: ${({ theme }) =>
        theme === 'dark' ? 'var(--light-color)' : 'var(--text-color)'};
      text-decoration: underline;
    }
    img {
      display: block;
      width: 100%;
      max-width: 43.75rem;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3.5rem;
      margin-bottom: 3.5rem;
    }
  }
  @media screen and (min-width: 48em) {
    div > * {
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }
  div > h1,
  h2 {
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--light-color)' : 'var(--title-color)'};
    text-align: center;
    line-height: 3rem;
    font-size: var(--step-4);
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    @media screen and (min-width: 36em) {
      text-align: left;
      line-height: 3.7rem;
    }
  }
  pre {
    width: 100%;
    max-width: 43.75rem;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 1.5rem;
    color: var(--light-color);
    white-space: pre-wrap;
    margin-bottom: 3rem;
    code {
      font-family: 'consolas';
      font-size: var(--step--2);
    }
  }
`;
