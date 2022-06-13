import styled from 'styled-components';
import { useRouter } from 'next/router';
// Components
import Image from 'next/image';
import Form from './Form';

const HeroImage = ({ backgroundImage, contactTitle }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      {pathname === '/' && (
        <HeroImageStyled backgroundImage={backgroundImage}>
          <HeroImageOpacity>
            <HeroImageBox>
              <HeroImageTitle contact="home">
                Hola, soy Damián Vigo
              </HeroImageTitle>
              <HeroImageSubtitle>Desarrollador Web</HeroImageSubtitle>
              <Image
                width={'200'}
                height={'200'}
                src="https://i.imgur.com/o3jywgM.jpg"
                title="Selfie Damián Vigo"
                alt="Imagen retrato de Damián Vigo"
              />
            </HeroImageBox>
          </HeroImageOpacity>
        </HeroImageStyled>
      )}
      {pathname === '/contacto' && (
        <HeroImageStyled backgroundImage={backgroundImage}>
          <HeroImageOpacity>
            <HeroImageBox form>
              <HeroImageTitle contact="contact">{contactTitle}</HeroImageTitle>
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
