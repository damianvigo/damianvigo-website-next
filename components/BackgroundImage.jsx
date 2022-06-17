import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const BackgroundImage = ({
  title,
  author,
  image,
  backgroundProyect,
  backgroundImageHome,
  backgroundImageBlog,
  backgroundProyectBottom,
  blog,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {backgroundImageHome && (
        <CiteContainerStyled>
          <CiteBackgroundImageStyled
            backgroundPosition
            theme={theme}
            backgroundImage={image}
          >
            <BackgroundOpacityStyled>
              {title && <p>{title}</p>}
              {author && <cite>{author}</cite>}
            </BackgroundOpacityStyled>
          </CiteBackgroundImageStyled>
        </CiteContainerStyled>
      )}
      {backgroundProyect && (
        <CiteContainerStyled>
          <CiteBackgroundImageStyled
            theme={theme}
            backgroundImage={image}
            backgroundProyect
          >
            <BackgroundOpacityStyled></BackgroundOpacityStyled>
          </CiteBackgroundImageStyled>
        </CiteContainerStyled>
      )}
      {backgroundImageBlog && (
        <CiteContainerStyled>
          <CiteBackgroundImageStyled
            theme={theme}
            backgroundImage={image}
            backgroundProyect
          >
            <BackgroundOpacityStyled>
              <h1>{blog}</h1>
            </BackgroundOpacityStyled>
          </CiteBackgroundImageStyled>
        </CiteContainerStyled>
      )}
      {backgroundProyectBottom && (
        <CiteContainerStyled>
          <CiteBackgroundImageStyled
            theme={theme}
            backgroundImage={image}
            backgroundProyectBottom
          >
            <BackgroundOpacityStyled
              backgroundProyectBottom
            ></BackgroundOpacityStyled>
          </CiteBackgroundImageStyled>
        </CiteContainerStyled>
      )}
    </>
  );
};

export default BackgroundImage;

const CiteContainerStyled = styled.div`
  width: 100%;
`;

const CiteBackgroundImageStyled = styled.article`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: ${({ backgroundProyect }) =>
    backgroundProyect ? '50% 20%' : '50% 90%'};
  background-size: cover;
  background-attachment: scroll;
  height: 50vh;
  /*   border-top: thick solid
    ${({ theme }) =>
    theme === 'dark' ? 'var(--second-color)' : 'var(--black-alpha-color)'};
  border-bottom: thick solid
    ${({ theme }) =>
    theme === 'dark' ? 'var(--second-color)' : 'var(--black-alpha-color)'}; */
  p {
    font-size: var(--step-1);
  }
  cite {
    font-size: var(--step-0);
  }

  @media screen and (min-width: 768px) {
    background-attachment: ${({ backgroundProyectBottom }) =>
      backgroundProyectBottom && 'fixed'};
    background-position: ${({ backgroundProyectBottom }) =>
      backgroundProyectBottom && '50% 50%'};
  }
`;

const BackgroundOpacityStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--black-alpha-color);
  background-color: ${({ backgroundProyectBottom }) =>
    backgroundProyectBottom && 'transparent'};
  min-height: 50vh;
  width: 100%;
  color: var(--second-color);
`;
