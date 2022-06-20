import styled from 'styled-components';
// Components
import Link from 'next/link';
import Layout from '../../../components/layouts/Layout';
import MarkdownView from 'react-showdown';
// DB
import conectarDB from '../../../lib/dbConnect';
import PostDeveloper from '../../../models/PostDeveloper';
// Context
import { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext';

const BlogPost = ({ success, error, devpost }) => {
  console.log(success);
  console.log(error);
  console.log(devpost);

  const { theme } = useContext(ThemeContext);

  if (!success) {
    return (
      <>
        <div>{Error}</div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </>
    );
  }

  return (
    <div>
      <Layout>
        <section className="section full-lg-screen">
          <ArticleContainerText theme={theme} className="container-900px">
            <MarkdownView markdown={devpost.markdown} />
          </ArticleContainerText>
        </section>
      </Layout>
    </div>
  );
};

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

export async function getServerSideProps({ params }) {
  console.log(params);
  try {
    await conectarDB();

    // const devpost = await PostDeveloper.findById(params.id).lean();

    const devpost = await PostDeveloper.findOne({ slug: params.slug }).lean();

    if (!devpost) {
      return { props: { success: false, error: 'Post no encontrado' } };
    }

    console.log(devpost);
    devpost._id = `${devpost._id}`;

    //  console.log(res);

    return {
      props: { success: true, devpost },
    };
  } catch (error) {
    console.log(error);
    return { props: { success: false, error: 'Error' } };
  }
}

export default BlogPost;
