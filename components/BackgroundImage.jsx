import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const BackgroundImage = ({ title, author }) => {
  const backgroundImage = 'https://picsum.photos/1920/1080';

  const { theme } = useContext(ThemeContext);

  return (
    <CiteContainerStyled>
      <CiteBackgroundImageStyled
        theme={theme}
        backgroundImage={backgroundImage}
      >
        <p>{title}</p>
        <cite>{author}</cite>
      </CiteBackgroundImageStyled>
    </CiteContainerStyled>
  );
};

export default BackgroundImage;

const CiteContainerStyled = styled.div`
  width: 100%;
`;

const CiteBackgroundImageStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: scroll;
  height: 50vh;
  border-top: thick solid
    ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--black-alpha-color)'};
  border-bottom: thick solid
    ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--black-alpha-color)'};
  p {
    font-size: var(--step-1);
  }
  cite {
    font-size: var(--step-0);
  }
`;
