import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Video = ({ publicOrigin, theme }) => {
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    const { origin } = window.location;
    setOrigin(origin);
  }, [origin]);

  return (
    <VideoContainer theme={theme}>
      <VideoStyled className="aspect-ratio-16-9" autoPlay loop muted>
        <source src={`${origin}${publicOrigin}`} type="video/mp4" />
      </VideoStyled>
    </VideoContainer>
  );
};

export default Video;

const VideoContainer = styled.div`
  background-color: var(--black-color);
  border-top: thick solid
    ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--dark-color)'};
  border-bottom: 4px solid
    ${({ theme }) =>
      theme === 'dark' ? 'var(--second-color)' : 'var(--dark-color)'};
`;

const VideoStyled = styled.video`
  /*  border: thick solid var(--black-color); */
  max-height: 25rem;
  object-fit: cover;
  object-position: bottom;
  width: 100vw;
  aspect-ratio: 16 / 9;
  opacity: 0.5;
`;
