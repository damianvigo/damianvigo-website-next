import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
// Components
import Image from 'next/image';
import Form from './Form';
import useLocation from '../hooks/useLocation';

const HeroImage = ({ contactTitle }) => {
  const router = useRouter();
  const { pathname } = router;

  const { href } = useLocation();

  return (
    <>
      {pathname === '/' && (
        <HeroImageStyled
          backgroundImage={
            href === 'https://www.damianvigo.com/'
              ? 'https://damianvigo.com/img/great.jpg'
              : 'https://i.imgur.com/BjlU9xu.jpg'
          }
        >
          <HeroImageOpacity>
            <HeroImageBox>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <HeroImageTitle contact="home">
                  Hola, soy Damián Vigo
                </HeroImageTitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <HeroImageSubtitle>Frontend Developer (React / Next.js)</HeroImageSubtitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
              >
                <Image
                  width={200}
                  height={200}
                  src="/img/damianvigo.jpg"
                  title="Selfie Damián Vigo"
                  alt="Imagen retrato de Damián Vigo"
                />
              </motion.div>
            </HeroImageBox>
          </HeroImageOpacity>
        </HeroImageStyled>
      )}
      {pathname === '/contacto' && (
        <HeroImageStyled
          backgroundImage={
            href === 'https://www.damianvigo.com/contacto'
              ? 'https://damianvigo.com/img/contacto.jpg'
              : 'https://i.imgur.com/aXb9Pux.jpg'
          }
        >
          <HeroImageOpacity>
            <HeroImageBox form="true">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <HeroImageTitle contact="contact">
                  {contactTitle}
                </HeroImageTitle>
              </motion.div>
              <Form />
            </HeroImageBox>
          </HeroImageOpacity>
        </HeroImageStyled>
      )}
    </>
  );
};

export default HeroImage;

const HeroImageStyled = styled.article`
  overflow-x: hidden;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 60%;
  background-attachment: fixed;
`;

const HeroImageOpacity = styled.aside`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ contactPaddingTop }) => contactPaddingTop};
  padding-bottom: ${(props) => props.contactPaddingBottom};
  text-align: center;
  background-color: var(--black-alpha-color);
  /*   overflow-y: hidden; */

  /*   @media screen and (min-width: 768px) {
    align-items: center;
  } */
`;

const HeroImageBox = styled.div`
  width: 100%;
  max-width: ${({ form }) => form && '34rem'};
  padding: 0 1rem 0;
  > * {
    margin-bottom: 1rem;
  }

  img {
    border-radius: 50%;
    object-fit: cover;
    width: clamp(5rem, 20vw, 10rem) !important;
    height: clamp(7rem, 24vw, 12rem) !important;
  }
`;

const HeroImageTitle = styled.h1`
  font-family: var(--fontSans);
  color: ${({ contact }) =>
    contact !== 'contact' ? ' var(--white-color)' : 'var(--light-color)'};
  font-weight: var(--fontWeightSans-900);
`;

const HeroImageSubtitle = styled.h2`
  font-family: var(--fontSans);
  color: var(--white-color);
  font-weight: var(--fontWeightSans-400);
  font-size: var(--step-2)
`;
