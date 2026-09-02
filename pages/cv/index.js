import { motion } from 'framer-motion';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Layout from '../../components/layouts/Layout';

const CvPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout
      theme={theme}
      title="Asesoría de CV | Damián Vigo"
      description="Armado profesional de CV y optimización LinkedIn. ATS-friendly, palabras clave, formato PDF + Word. Desde $6.000 ARS."
      ogImage="https://i.imgur.com/fT6QwPm.jpg"
    >
      <div className={theme}>
        <section
          aria-labelledby="hero-title"
          className="section container-1200px"
          style={{ paddingTop: 'clamp(4rem, 12vh, 8rem)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1
              id="hero-title"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                color: theme === 'dark' ? 'var(--second-color)' : '#222222',
              }}
            >
              Transformá tu perfil profesional
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                marginBottom: '2rem',
                color: theme === 'dark' ? 'var(--second-color)' : '#222222',
              }}
            >
              CV optimizado para ATS + LinkedIn potente. Palabras clave, logros cuantificables, formatos PDF & Word.
            </p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=5491168602250&text=Hola%20Dami%C3%A1n!%20Vi%20tu%20servicio%20de%20Asesor%C3%ADa%20de%20CV%20y%20me%20gustar%C3%ADa%20contratarte.%20%C2%BFMe%20das%20m%C3%A1s%20info?"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '1rem 2rem',
              background: 'var(--first-color)',
              color: 'var(--second-color)',
              borderRadius: '0.5rem',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                background: 'var(--second-color)',
                color: 'var(--first-color)',
              }
            }}
          >
            Quiero mi CV profesional
          </motion.a>
          </motion.div>
        </section>

        <section
          aria-labelledby="benefits-title"
          className="section container-1200px"
        >
          <h2
            id="benefits-title"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: '2rem',
              color: theme === 'dark' ? 'var(--second-color)' : '#222222',
            }}
          >
            ¿Qué incluye el servicio?
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            <li
              style={{
                background: 'var(--first-color)',
                color: 'var(--second-color)',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              }}
            >
              ✅ Optimización ATS - Palabras clave para pasar filtros automáticos
            </li>
            <li
              style={{
                background: 'var(--first-color)',
                color: 'var(--second-color)',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              }}
            >
              ✅ Redacción enfocada en logros - Cuantificamos tu impacto
            </li>
            <li
              style={{
                background: 'var(--first-color)',
                color: 'var(--second-color)',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              }}
            >
              ✅ Diseño moderno y limpio - Profesional, legible, adaptable
            </li>
            <li
              style={{
                background: 'var(--first-color)',
                color: 'var(--second-color)',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              }}
            >
              ✅ Entrega en PDF + Word - Editables para futuras actualizaciones
            </li>
            <li
              style={{
                background: 'var(--first-color)',
                color: 'var(--second-color)',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              }}
            >
              ✅ Perfil LinkedIn sincronizado - (Plan $8.000) Optimizado para reclutadores
            </li>
          </ul>
        </section>

        <section
          aria-labelledby="pricing-title"
          className="section container-1200px"
        >
          <h2
            id="pricing-title"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: '2rem',
              textAlign: 'center',
              color: theme === 'dark' ? 'var(--second-color)' : '#222222',
            }}
          >
            Planes y precios
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {/* Plan 1: CV Only - $6.000 */}
            <article
              style={{
                background:
                  theme === 'dark'
                    ? 'var(--black-alpha-color-cards)'
                    : 'var(--white-alpha-color)',
                border: `4px solid ${theme === 'dark' ? '#a1b5d8' : 'var(--first-color)'}`,
                borderRadius: '0.5rem',
                padding: '2rem',
                textAlign: 'center',
                transition: 'transform 0.3s ease-in, opacity 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                  marginBottom: '1rem',
                  color: theme === 'dark' ? 'var(--second-color)' : '#222222',
                }}
              >
                CV Profesional
              </h3>
              <div
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 'bold',
                  color:
                    theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)',
                  marginBottom: '1rem',
                }}
              >
                $6.000
              </div>
              <span
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: theme === 'dark' ? 'var(--second-color)' : '#222222',
                }}
              >
                ARS
              </span>
              <ul
                style={{
                  listStyle: 'none',
                  padding: '1rem 0',
                maxWidth: '250px',
                margin: '0 auto',
              }}
              >
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  CV optimizado ATS
                </li>
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  Palabras clave de tu rubro
                </li>
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  Logros cuantificables
                </li>
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  Diseño profesional
                </li>
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  Entrega PDF + Word
                </li>
              </ul>
            </article>

            {/* Plan 2: CV + LinkedIn - $8.000 */}
            <article
              style={{
                background:
                  theme === 'dark'
                    ? 'var(--black-alpha-color-cards)'
                    : 'var(--white-alpha-color)',
                border: `4px solid ${theme === 'dark' ? '#a1b5d8' : 'var(--first-color)'}`,
                borderRadius: '0.5rem',
                padding: '2rem',
                textAlign: 'center',
                transition: 'transform 0.3s ease-in, opacity 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
                // Featured styling
                boxShadow:
                  theme === 'dark'
                    ? 'var(--card-shadow-light)'
                    : 'var(--card-shadow)',
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                  marginBottom: '1rem',
                  color: theme === 'dark' ? 'var(--second-color)' : '#222222',
                }}
              >
                CV + LinkedIn Completo
              </h3>
              <div
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 'bold',
                  color:
                    theme === 'dark' ? 'var(--second-color)' : 'var(--first-color)',
                  marginBottom: '1rem',
                }}
              >
                $8.000
              </div>
              <span
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: theme === 'dark' ? 'var(--second-color)' : '#222222',
                }}
              >
                ARS
              </span>
              <ul
                style={{
                  listStyle: 'none',
                  padding: '1rem 0',
                maxWidth: '250px',
                margin: '0 auto',
              }}
              >
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  Todo lo del plan CV Profesional
                </li>
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  Perfil LinkedIn 100% optimizado
                </li>
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  Headline magnético + About persuasivo
                </li>
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  Keywords para búsquedas de reclutadores
                </li>
                <li
                  style={{
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color:
                      theme === 'dark' ? 'var(--second-color)' : '#222222',
                  }}
                >
                  Configuración de visibilidad
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="process-title"
          className="section container-900px"
        >
          <h2
            id="process-title"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: '2rem',
              textAlign: 'center',
              color: theme === 'dark' ? 'var(--second-color)' : '#222222',
            }}
          >
            ¿Cómo trabajamos?
          </h2>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <li
              style={{
                padding: '1rem 0',
                borderBottom: '1px solid #e0e0e0',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                textAlign: 'center',
                color: theme === 'dark' ? 'var(--second-color)' : '#222222',
              }}
            >
              <strong
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  color: theme === 'dark' ? 'var(--second-color)' : '#222222',
                }}
              >
                1. Contacto
              </strong>
              - Me escribes por WhatsApp
            </li>
            <li
              style={{
                padding: '1rem 0',
                borderBottom: '1px solid #e0e0e0',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                textAlign: 'center',
                color: theme === 'dark' ? 'var(--second-color)' : '#222222',
              }}
            >
              <strong
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  color: theme === 'dark' ? 'var(--second-color)' : '#222222',
                }}
              >
                2. Cuestionario
              </strong>
              - Te envío formulario breve para conocer tu experiencia
            </li>
            <li
              style={{
                padding: '1rem 0',
                borderBottom: '1px solid #e0e0e0',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                textAlign: 'center',
                color: theme === 'dark' ? 'var(--second-color)' : '#222222',
              }}
            >
              <strong
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  color: theme === 'dark' ? 'var(--second-color)' : '#222222',
                }}
              >
                3. Entrega
              </strong>
              - Recibís tu CV (y LinkedIn) en 48hs
            </li>
          </ol>
        </section>

        <section
          aria-labelledby="cta-title"
          className="section container-900px text-center"
        >
          <h2
            id="cta-title"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              marginBottom: '1rem',
              color: theme === 'dark' ? 'var(--second-color)' : '#222222',
            }}
          >
            ¿Empezamos?
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              marginBottom: '2rem',
              color: theme === 'dark' ? 'var(--second-color)' : '#222222',
            }}
          >
            Tu próximo empleo está a un mensaje de distancia.
          </p>
<motion.a
            href="https://api.whatsapp.com/send?phone=5491168602250&text=Hola%20Dami%C3%A1n!%20Vi%20tu%20servicio%20de%20Asesor%C3%ADa%20de%20CV%20y%20me%20gustar%C3%ADa%20contratarte.%20%C2%BFMe%20das%20m%C3%A1s%20info?"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '1rem 2rem',
              background: 'var(--first-color)',
              color: 'var(--second-color)',
              borderRadius: '0.5rem',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                background: 'var(--second-color)',
                color: 'var(--first-color)',
              }
            }}
          >
            Quiero mi CV profesional
          </motion.a>
        </section>
      </div>
    </Layout>
  );
};

export default CvPage;