import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
// Components
import Layout from '../components/layouts/Layout';
import Home from '../components/Home';

export default function Index() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Layout
        title="Bienvenido"
        description="¡Hola! 🖐️ Bienvenido/a a mi sitio web ✨ Mi nombre es Damián Vigo, soy programador web 🤓"
        ogDescription="¡Hola! 🖐️ Bienvenido/a a mi sitio web ✨ Mi nombre es Damián Vigo, soy programador web 🤓"
        ogImage="https://i.imgur.com/BjlU9xu.jpg"
        width="1920"
        height="1080"
        type="image/jgp"
      >
        <Home theme={theme} />
      </Layout>
    </>
  );
}
