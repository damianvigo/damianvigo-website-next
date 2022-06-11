import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/layouts/Layout';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';

const Blog = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout theme={theme}>
      <section>Blog !!</section>
    </Layout>
  );
};

export default Blog;
