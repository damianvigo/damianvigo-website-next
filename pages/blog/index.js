import React from 'react';
import Layout from '../../components/layouts/Layout';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';
import BackgroundImage from '../../components/BackgroundImage';

const Blog = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout title="Blog" theme={theme}>
      <div>
        <BackgroundImage
          image="https://i.imgur.com/SpUDEmn.jpg"
          backgroundImageBlog
          blog="Blog"
        />
      </div>
    </Layout>
  );
};

export default Blog;
