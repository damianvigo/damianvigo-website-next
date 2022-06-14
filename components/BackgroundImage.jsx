import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const BackgroundImage = ({ title, author, image }) => {
  const { theme } = useContext(ThemeContext);

  return (
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
  );
};

export default BackgroundImage;

const CiteContainerStyled = styled.div`
  width: 100%;
`;

const CiteBackgroundImageStyled = styled.article`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: ${({ backgroundPosition }) =>
    backgroundPosition && '50% 20%'};
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
`;

const BackgroundOpacityStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--black-alpha-color);
  min-height: 50vh;
  width: 100%;
  color: var(--second-color);
`;
