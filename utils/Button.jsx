import styled from 'styled-components';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ThemeContext from '../context/ThemeContext';

const Button = ({
  wsp,
  more,
  submit,
  moreDescription,
  talkToMe,
  error,
  crud,
  borrar,
  eliminar,
}) => {
  const [isSSR, setIsSSR] = useState(true);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <>
      {!isSSR && wsp && (
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <ButtonWspStyled theme={theme}>
            <a
              href="https://api.whatsapp.com/send?phone=5491156923013&text=¡Hola!%20¿Podemos%20conversar%20ahora?"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span>{talkToMe}</span>
                <svg
                  fill="#fff"
                  width="25px"
                  height="25px"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp icon</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                </svg>
              </div>
            </a>
          </ButtonWspStyled>
        </AnimationOnScroll>
      )}
      {more && (
        <AnimationOnScroll
          animateOnce
          animateIn="animate__flipInX"
          duration={2}
        >
          <ButtonWspStyled theme={theme}>
            <Link href="/proyectos">
              <div>
                <a>{moreDescription}</a>
              </div>
            </Link>
          </ButtonWspStyled>
        </AnimationOnScroll>
      )}
      {error && (
        <ButtonWspStyled theme={theme}>
          <Link href="/">
            <div>
              <a>Volver... 😅</a>
            </div>
          </Link>
        </ButtonWspStyled>
      )}
      {crud && (
        <ButtonWspStyled onClick={eliminar} type={submit} theme={theme}>
          <div>
            <a>{borrar} 😐</a>
          </div>
        </ButtonWspStyled>
      )}
    </>
  );
};

const ButtonWspStyled = styled.button`
  width: clamp(200px, 20vw, 250px);
  border-radius: 0.5rem;
  padding: 0 !important;
  margin: 2rem auto;
  background-color: #1f7a8c;
  border: thin solid
    ${({ theme }) =>
      theme === 'dark' ? 'var(--light-color)' : 'var(--first-color)'};
  box-shadow: var(--btn-shadow);
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  div {
    display: inline-block;
    width: 100%;
    color: var(--second-color);
    padding: 1rem;
    span {
      vertical-align: top;
      margin-right: 0.5rem;
    }
    a {
      color: var(--light-color);
    }
    &:hover {
      a {
        color: ${'Ver más' && 'var(--text-color)'};
      }
    }
  }
  &:hover {
    background-color: var(--second-color);
    svg {
      background-color: #25d366;
      border-radius: 50%;
    }
    span {
      color: var(--first-color);
    }
  }
`;

export default Button;
