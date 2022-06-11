import Header from '../../components/Header';
import Layout from '../../components/layouts/Layout';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Proyectos = () => {
  const { theme } = useContext(ThemeContext);
  /* console.log(theme); */
  return (
    <Layout theme={theme}>
      <section>Proyectos !!</section>
    </Layout>
  );
};

export default Proyectos;
