import styled from 'styled-components';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const PerfilDescription = () => (
  <AnimationOnScroll animateIn="animate__fadeInUp" offset={200}>
    <h3>¿Quién Soy?</h3>
    <p>
      ¡Hola! 👋 Me llamo Damián Vigo y soy{' '}
      <strong>
        <i>Frontend Developer</i>{' '}
      </strong>{' '}
      de Buenos Aires Argentina.
    </p>
    <p>
      <strong>
        Mi <i>stack</i> actual es{' '}
        <LettersTech>
          <i>M</i>
          <i>E</i>
          <i>R</i>
          <i>N</i>
        </LettersTech>
        . Estoy especializado con la librería <i>React</i> de <i>javascript</i>.
      </strong>
      . Disfruto llevar a cabo la maquetación e interactividad de interfaces
      <i>web</i>, así como la optimización, para el buen posicionamiento y el
      rendimiento de carga de sitios y aplicaciones web.
    </p>
  </AnimationOnScroll>
);
export default PerfilDescription;

const LettersTech = styled.span`
  i:first-child {
    color: #589636;
  }
  i:nth-child(2) {
    color: #ce7871;
  }
  i:nth-child(3) {
    color: #00d8ff;
  }
  i:last-child {
    color: #6cc24a;
  }
`;
