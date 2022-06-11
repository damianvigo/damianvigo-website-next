import styled from 'styled-components';

const CiteBackground = () => {
  const backgroundImage = 'https://picsum.photos/1920/1080';
  return (
    <CiteContainerStyled>
      <CiteBackgroundImageStyled backgroundImage={backgroundImage}>
        <p>« La simplicidad es la máxima sofisticación »</p>
        <cite>Leonardo Da Vinci</cite>
      </CiteBackgroundImageStyled>
    </CiteContainerStyled>
  );
};

export default CiteBackground;

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
  color: var(--second-color);
  p {
    font-size: var(--step-1);
  }
  cite {
    font-size: var(--step-0);
  }
`;
