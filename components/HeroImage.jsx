import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AnimationOnScroll } from 'react-animation-on-scroll';
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
              <AnimationOnScroll animateIn="animate__zoomInLeft" duration={1.5}>
                <HeroImageTitle contact="home">
                  Hola, soy Damián Vigo
                </HeroImageTitle>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__zoomInRight"
                duration={2.5}
              >
                <HeroImageSubtitle>Desarrollador Web</HeroImageSubtitle>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__zoomInUp" duration={4}>
                <Image
                  width="200"
                  height="200"
                  src="https://i.imgur.com/o3jywgM.jpg"
                  title="Selfie Damián Vigo"
                  alt="Imagen retrato de Damián Vigo"
                />
              </AnimationOnScroll>
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
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                duration={2}
                animateOnce
              >
                <HeroImageTitle contact="contact">
                  {contactTitle}
                </HeroImageTitle>
              </AnimationOnScroll>
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
`;
