import styled from 'styled-components';
// Components
import Link from 'next/link';
import Layout from '../../../components/layouts/Layout';
import MarkdownView from 'react-showdown';
// DB
import conectarDB from '../../../lib/dbConnect';
import Post from '../../../models/Posts';
import { useRouter } from 'next/router';
// Context
import { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import Custom404 from '../../404';

const BlogPost = ({ post, success, error }) => {
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
          {post && <MarkdownView markdown={markdown} />}
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
  }
  div > h1 {
    text-align: center;
    line-height: 3.5rem;
    @media screen and (min-width: 480px) {
      text-align: left;
    }
  }
`;
