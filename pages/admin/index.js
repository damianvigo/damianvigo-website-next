import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../../components/layouts/Layout';
import ThemeContext from '../../context/ThemeContext';

const Admin = () => {
  const [apiKey, setApiKey] = useState('');
  const [hasKey, setHasKey] = useState(false);
  const { theme } = useContext(ThemeContext);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('API_KEY');
    if (stored) {
      setHasKey(true);
      setApiKey(stored);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!apiKey.trim()) return;
    localStorage.setItem('API_KEY', apiKey.trim());
    setHasKey(true);
  };

  const handleClear = () => {
    localStorage.removeItem('API_KEY');
    setHasKey(false);
    setApiKey('');
  };

  return (
    <Layout title="Admin">
      <SectionStyled className="container-900px section full-lg-screen">
        <h1>Admin Panel</h1>

        {!hasKey ? (
          <FormStyled onSubmit={handleSubmit}>
            <p>Ingresá tu API key para acceder al panel de administración.</p>
            <input
              type="password"
              placeholder="API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              autoComplete="off"
            />
            <button type="submit">Guardar</button>
          </FormStyled>
        ) : (
          <div>
            <p>
              API key guardada. Elegí una opción:
            </p>
            <LinksStyled theme={theme}>
              <Link href="/new">Crear Proyecto</Link>
              <Link href="/new-post">Crear Post</Link>
            </LinksStyled>
            <button className="clear-btn" onClick={handleClear}>
              Borrar API key
            </button>
          </div>
        )}
      </SectionStyled>
    </Layout>
  );
};

export default Admin;

const SectionStyled = styled.section`
  padding-top: 4rem;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .clear-btn {
    display: block;
    margin: 2rem auto 0;
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    font-size: var(--step--1);
    text-decoration: underline;
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  input {
    width: 100%;
    max-width: 400px;
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: 2px solid var(--first-color);
    font-size: 1rem;
  }
  button {
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;
    border: none;
    background-color: var(--first-color);
    color: var(--second-color);
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #1a5c6e;
    }
  }
`;

const LinksStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  a {
    display: block;
    width: 100%;
    max-width: 400px;
    text-align: center;
    padding: 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
    background-color: ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)'};
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--first-color)' : 'var(--second-color)'};
    &:hover {
      opacity: 0.85;
    }
  }
`;
