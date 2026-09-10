import { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ThemeContext from '../../context/ThemeContext';
import Layout from '../../components/layouts/Layout';

const pillars = [
  {
    title: 'Comunicación clara',
    description: 'Te mantengo informado en cada etapa del proyecto. Sin sorpresas, sin tecnicismos innecesarios.',
  },
  {
    title: 'Código limpio',
    description: 'Escribo código mantenible, documentado y escalable que otros desarrolladores pueden entender y extender.',
  },
  {
    title: 'Compromiso con plazos',
  description: 'Cumplo los tiempos acordados. Si surge un imprevisto, lo comunico con anticipación.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const Contacto = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout
      title="Contacto"
      description="¿Tenés un proyecto en mente? Trabajemos juntos. Contactame para hablar sobre tu idea."
      ogDescription="¿Tenés un proyecto en mente? Trabajemos juntos. Contactame para hablar sobre tu idea."
      ogImage="https://i.imgur.com/aXb9Pux.jpg"
    >
      <SectionStyled theme={theme}>
        <ContainerStyled>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle theme={theme}>¿Por qué trabajamos juntos?</SectionTitle>
          </motion.div>

          <PillarsGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} variants={itemVariants} theme={theme}>
                <PillarTitle>{pillar.title}</PillarTitle>
                <PillarDescription>{pillar.description}</PillarDescription>
              </PillarCard>
            ))}
          </PillarsGrid>
        </ContainerStyled>
      </SectionStyled>

      <SectionStyled $alt theme={theme}>
        <ContainerStyled>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle theme={theme}>Otros medios de contacto</SectionTitle>
          </motion.div>

          <ContactGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactCard variants={itemVariants} theme={theme}>
              <ContactLabel theme={theme}>LinkedIn</ContactLabel>
              <ContactLink
                href="https://www.linkedin.com/in/damian-vigo/"
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
              >
                /in/damianvigo
              </ContactLink>
            </ContactCard>

            <ContactCard variants={itemVariants} theme={theme}>
              <ContactLabel theme={theme}>GitHub</ContactLabel>
              <ContactLink
                href="https://github.com/damianvigo"
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
              >
                @damianvigo
              </ContactLink>
            </ContactCard>
          </ContactGrid>

          <ResponseTime theme={theme}>
            Respondo dentro de las 24 horas hábiles.
          </ResponseTime>
        </ContainerStyled>
      </SectionStyled>
    </Layout>
  );
};

export default Contacto;

const SectionStyled = styled.section`
  padding: 4rem 1rem;
  background-color: ${({ $alt, theme }) => {
    if ($alt) return theme === 'dark' ? 'var(--dark-color)' : 'var(--second-color)';
    return 'transparent';
  }};
`;

const ContainerStyled = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => (theme === 'dark' ? 'var(--light-color)' : 'var(--text-color)')};
`;

const PillarsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PillarCard = styled(motion.div)`
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--dark-color)' : 'var(--first-color)'};
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--light-color)'};
  border: thin solid ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--first-color)'};
`;

const PillarTitle = styled.h3`
  font-size: var(--step-0);
  margin-bottom: 1rem;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--white-color)' : 'var(--white-color)'};
`;

const PillarDescription = styled.p`
  font-size: var(--step--1);
  line-height: 1.6;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--light-color)'};
`;

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  border: thin solid ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--first-color)'};
  border-radius: 0.5rem;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--text-color)'};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme === 'dark' ? 'var(--first-color)' : 'var(--first-color)'};
    color: var(--light-color);
  }
`;

const ContactLabel = styled.span`
  display: block;
  font-size: var(--step--2);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  opacity: 0.7;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--text-color)'};
`;

const ContactLink = styled.a`
  font-size: var(--step--1);
  font-weight: var(--fontWeightSans-900);
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--white-color)' : 'var(--first-color)'};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ResponseTime = styled.p`
  text-align: center;
  font-size: var(--step--1);
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--light-color)' : 'var(--text-color)'};
  opacity: 0.7;
  margin-top: 1rem;
`;
