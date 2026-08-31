import styled from 'styled-components';
import { motion } from 'framer-motion';

const PerfilDescription = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 100 }}
  >
    <TitleDescription>¿Quién Soy?</TitleDescription>
    <p>
      ¡Hola! 👋 Me llamo Damián Vigo y soy{' '}
      <strong>
        <i>Frontend Developer</i>{' '}
      </strong>{' '}
      de Buenos Aires Argentina.
    </p>
    <Description>
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
    </Description>
  </motion.div>
);
export default PerfilDescription;

const TitleDescription = styled.h3`
  padding-bottom: 2rem;
`;

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

const Description = styled.p`
  @media screen and (min-width: 48em) {
    margin-left: 4rem;
    margin-right: 4rem;
  }
`;
