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
            <ReactMarkdown linkTarget="_blank">{post.markdown}</ReactMarkdown>
          </div>
        </ArticleContainerText>
      </section>
    </Layout>
  );
};

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

export default BlogPost;

const ArticleContainerText = styled.article`
  div > * {
    line-height: 2rem;
    margin-top: 3rem;
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
    }
  }
  div > h1 {
    text-align: center;
    line-height: 3.5rem;
    font-size: var(--step-4);
    @media screen and (min-width: 36em) {
      text-align: left;
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
    code {
      font-family: 'consolas';
      font-size: var(--step--2);
    }
  }
`;