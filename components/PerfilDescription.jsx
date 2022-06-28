import { AnimationOnScroll } from 'react-animation-on-scroll';

const PerfilDescription = () => (
  <AnimationOnScroll animateIn="animate__fadeInUp" offset={200}>
    <h3>¿Quién Soy?</h3>
    <p>
      ¡Hola! 👋 Me llamo Damián Vigo y soy{' '}
      <strong>
        <i>Full Stack JavaScript Developer</i>{' '}
      </strong>{' '}
      de Buenos Aires Argentina.
    </p>
    <p>
      <strong>
        Estoy especializado en <i>Frontend</i> con la librería <i>React</i> de{' '}
        <i>javascript</i>
      </strong>
      . Disfruto llevar a cabo la maquetación e interactividad de interfaces
      <i>web</i>, así como la optimización, para el buen posicionamiento y el
      rendimiento de carga de sitios y aplicaciones web.
    </p>
  </AnimationOnScroll>
);
export default PerfilDescription;
