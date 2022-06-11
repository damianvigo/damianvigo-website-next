import Header from '../../components/Header';
import Layout from '../../components/layouts/Layout';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import BackgroundImage from '../../components/BackgroundImage';

const Proyectos = () => {
  const { theme } = useContext(ThemeContext);
  /* console.log(theme); */
  return (
    <Layout theme={theme}>
      <BackgroundImage title="" author="" />
    </Layout>
  );
};

export default Proyectos;
