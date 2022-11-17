import styled from 'styled-components';

const BtnScrollTop = ({ scrollTop, toTop }) => {
  return (
    <>
      <BtnScrollTopStyled
        onClick={toTop}
        id="btn-scroll"
        title="btn-scroll"
        className={`${scrollTop}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
      </BtnScrollTopStyled>
    </>
  );
};

export default BtnScrollTop;

const BtnScrollTopStyled = styled.button`
  position: fixed;
  bottom: 2vh;
  right: 1vw;
  width: var(--step-4);
  height: var(--step-4);
  line-height: 1rem;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: bold;
  background-color: var(--first-color);
  cursor: pointer;
  outline: 0;
  border: 0;
  transition: all 0.5s ease-out;
  &:hover {
    opacity: 0.65;
  }
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
  svg {
    width: var(--step--0);
    height: var(--step--0);
    fill: var(--second-color);
  }
  /* 
  @media screen and (max-width: 48em) {
    display: none;
  } */

  @media screen and (max-width: 64em) {
    bottom: calc(var(--header-height) + 2vw);
  }
`;
