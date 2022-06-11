import Layout from './layouts/Layout';
import Home from './Home';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Layout theme={theme}>
        <Home theme={theme} />
      </Layout>
    </>
  );
};

export default App;
