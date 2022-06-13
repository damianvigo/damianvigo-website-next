import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HeroImage = ({ backgroundImage, home, contactTitle }) => {
  const router = useRouter();
  const { pathname } = router;

  /*   if (pathname !== '/') {
    return;
  } */

  return (
    <>
      {pathname === '/' && (
        <HeroImageStyled backgroundImage={backgroundImage}>
          <HeroImageOpacity>
            <HeroImageBox>
              <HeroImageTitle>Hola, soy Damián Vigo</HeroImageTitle>
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
            <HeroImageBox>
              <HeroImageTitle>{contactTitle}</HeroImageTitle>
              <form>
                <input
                  type="text"
                  name="name"
                  title="El nombre sólo acepta letras y espacios en blanco"
                  placeholder="Tu nombre"
                  autoFocus
                  required
                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                />
                <input
                  type="email"
                  name="email"
                  title="Email incorrecto"
                  required
                  placeholder="Tu email"
                  pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                />
                <input
                  type="text"
                  name="subject"
                  required
                  title="El Asunto es requerido"
                  placeholder="Asunto"
                />
                <textarea
                  name="comments"
                  cols="50"
                  rows="10"
                  placeholder="Tu comentario"
                  title="Tu comentario no debe exceder los 255 caracteres"
                  data-pattern="^.{1,255}$"
                  required
                ></textarea>
                <input type="submit" value="Envíar" />
                <div>{/* Loader */}</div>
                <div>{/* Response */}</div>
              </form>
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
`;

const HeroImageBox = styled.div`
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
  color: var(--white-color);
  font-weight: var(--fontWeightSans-900);
`;

const HeroImageSubtitle = styled.h2`
  font-family: var(--fontSans);
  color: var(--white-color);
  font-weight: var(--fontWeightSans-400);
`;
