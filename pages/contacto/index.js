import Layout from '../../components/layouts/Layout';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Contacto = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout theme={theme}>
      <section>Contacto !!</section>
    </Layout>
  );
};

export default Contacto;
