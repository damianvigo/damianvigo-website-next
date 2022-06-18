import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
// Components
import Layout from '../components/layouts/Layout';
import Home from '../components/Home';

export default function Index() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Layout title="Bienvenido" description="hello">
        <Home theme={theme} />
      </Layout>
    </>
  );
}
