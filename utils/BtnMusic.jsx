import { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';

// Icons
import SvgPause from '../assets/icon/elements/SvgPause';
import SvgPlay from '../assets/icon/elements/SvgPlay';

const Btn = styled.div`
  position: fixed;
  cursor: pointer;
  background-color: var(--high-black-alpha-color);
  z-index: 999;
  svg {
    position: fixed;
    width: var(--step-4);
    height: var(--step-4);
    left: calc(var(--step-4) + 5vw);
    bottom: calc(var(--header-height) + 2vw);
    transition: opacity 0.5s ease-out;
    :hover {
      opacity: 0.8;
    }
    @media screen and (min-width: 64em) {
      bottom: 2vh;
      left: calc(var(--step-4) + 3vw);
    }
  }
`;

const BtnMusic = () => {
  const [song, setSong] = useState('');
  const [btnSvgMusic, setbtnSvgMusic] = useState(false);

  useEffect(() => {
    const $song = document.createElement('audio');
    $song.src = '/assets/audio/oscuro-my-weakness.opus';
    $song.loop = true;
    setSong($song);
  }, []);

  const handleMusic = (e) => {
    if (e.target.matches('#btn-music *')) {
      song.play();
      e.target.disabled = true;
      setbtnSvgMusic(!btnSvgMusic);
    }

    if (e.target.matches('#btn-music-pause *')) {
      song.pause();
      e.target.disabled = false;
      setbtnSvgMusic(!btnSvgMusic);
    }
  };

  return (
    <>
      {!btnSvgMusic ? (
        <Btn id="btn-music" onClick={handleMusic}>
          <SvgPlay />
        </Btn>
      ) : (
        <Btn id="btn-music-pause" onClick={handleMusic}>
          <SvgPause />
        </Btn>
      )}
    </>
  );
};

export default BtnMusic;
