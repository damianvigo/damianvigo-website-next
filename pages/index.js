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
        title="Damián Vigo | Frontend Developer React & Next.js"
        description="Frontend Developer de Buenos Aires, Argentina. Especializado en React, Next.js y desarrollo web moderno. Conocé mis proyectos y artículos."
        ogDescription="Frontend Developer de Buenos Aires, Argentina. Especializado en React, Next.js y desarrollo web moderno."
        ogImage="https://i.imgur.com/BjlU9xu.jpg"
        width="1920"
        height="1080"
        type="image/jpeg"
      >
        <Home theme={theme} />
      </Layout>
    </>
  );
}
