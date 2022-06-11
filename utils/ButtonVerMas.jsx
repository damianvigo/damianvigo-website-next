import styled from 'styled-components';
import Link from 'next/link';

const ButtonVerMas = () => {
  return (
    <ButtonVerMasStyled>
      <Link href="/proyectos">
        <a>Ver más</a>
      </Link>
    </ButtonVerMasStyled>
  );
};

export default ButtonVerMas;

const ButtonVerMasStyled = styled.button`
  display: block;
  margin: 2rem auto;
  position: relative;
  width: clamp(200px, 20vw, 300px);

  background-color: #1f7a8c;
  font-size: var(--step-0);
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease 0s;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    color: var(--second-color);
    margin: 0;
    width: 100%;
  }
  &:hover {
    background-color: var(--second-color);
    a {
      color: var(--first-color);
    }
  }
`;
