import styled from 'styled-components';

const ErrorsStyled = styled.p`
  /* margin: -1rem auto; */
  width: 100%;
  padding: 0;
  font-size: var(--step--2);
  color: var(--second-color);
  background-color: var(--first-color);
`;

const MessageErrorForm = ({
  errorName,
  errorEmail,
  errorSubject,
  errorComment,
}) => {
  // console.log(errorName);
  return (
    <>
      {errorName ? (
        <ErrorsStyled>{errorName}</ErrorsStyled>
      ) : errorEmail ? (
        <ErrorsStyled>{errorEmail}</ErrorsStyled>
      ) : errorSubject ? (
        <ErrorsStyled>{errorSubject}</ErrorsStyled>
      ) : errorComment ? (
        <ErrorsStyled>{errorComment}</ErrorsStyled>
      ) : (
        ''
      )}
    </>
  );
};

export default MessageErrorForm;
