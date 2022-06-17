import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

// Components
import Layout from './layouts/Layout';
import Home from './Home';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Layout title="Bienvenido" theme={theme}>
        <Home theme={theme} />
      </Layout>
    </>
  );
};

export default App;
