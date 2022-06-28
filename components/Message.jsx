const Message = ({ msg, bgColor }) => {
  let styles = {
    marginTop: '3rem',
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: 'var(--light-color)',
    fontWeight: 'bold',
    backgroundColor: bgColor,
    gridColumn: 'span 2',
  };
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }}></p>
    </div>
  );
};

export default Message;
