import Layout from '../../components/layouts/Layout';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import HeroImage from '../../components/HeroImage';

const Contacto = () => {
  const backgroundImage = 'https://picsum.photos/1920/1080';

  const { theme } = useContext(ThemeContext);
  return <Layout theme={theme}></Layout>;
};

export default Contacto;
