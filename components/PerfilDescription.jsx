import styled from 'styled-components';
import { motion } from 'framer-motion';

const PerfilDescription = ({ theme }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 100 }}
  >
    <TitleDescription>¿Quién Soy?</TitleDescription>
    <Greeting theme={theme}>
      Hola, soy <strong>Damián</strong>
    </Greeting>
    <Description>
      Soy <strong>Frontend Developer</strong> de Buenos Aires, Argentina. Disfruto convertir ideas,
      diseños y necesidades de negocio en interfaces web funcionales, claras y agradables de usar.
    </Description>
    <Description>
      Durante los últimos años trabajé con <strong>React</strong>, <strong>TypeScript</strong>, <strong>Next.js</strong>,
      <strong> JavaScript</strong> y <strong>Tailwind CSS</strong> en productos reales, incluyendo plataformas
      de empleo y sistemas de administración. Participé en el desarrollo de funcionalidades,
      consumo de APIs REST, formularios, tablas, filtros y rediseños completos de interfaz.
    </Description>
    <Description>
      Me interesa crear experiencias digitales consistentes y mantenibles, prestando atención
      al responsive design, la accesibilidad, la organización de componentes y los pequeños
      detalles que mejoran la experiencia de quien usa el producto.
    </Description>
  </motion.div>
);
export default PerfilDescription;

const TitleDescription = styled.h3`
  padding-bottom: 2rem;
`;

const Greeting = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  margin-bottom: 2rem;
  color: ${({ theme }) => (theme === 'dark' ? 'var(--light-color)' : 'var(--text-color)')};
  strong {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#222')};
  }
`;

const Description = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
  @media screen and (min-width: 48em) {
    margin-left: 4rem;
    margin-right: 4rem;
  }
`;
