import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useNetworkStatus from '../hooks/useNetworkStatus';

const NetworkStyled = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  background-color: ${({ conect }) => conect};
  color: var(--second-color);
  transition: all 0.3s ease-in-out;
  /*   &.is-active {
    opacity: 1;
    visibility: visible;
  } */
  p {
    font-size: var(--step-0);
  }
`;

const NetworkStatus = ({ conect, up, down }) => {
  let refNetwork = useRef();
  const [isOnline] = useNetworkStatus();

  useEffect(() => {
    const $loss = document.getElementById('btn-showNetwork');
    if (isOnline === 'online') {
      refNetwork.current.style.opacity = 1;
      refNetwork.current.style.visibility = 'visible';
      /*      $loss.classList.add('is-active'); */
      setTimeout(() => {
        /*       $loss.classList.remove('is-active'); */
        refNetwork.current.style.opacity = 0;
      }, 3000);
    }

    if (isOnline === 'offline') {
      /* $loss.classList.add('is-active'); */
      refNetwork.current.style.opacity = 1;
      refNetwork.current.style.visibility = 'visible';
      setTimeout(() => {
        refNetwork.current.style.opacity = 0;
        /* $loss.classList.remove('is-active'); */
      }, 3000);
    }
  }, [isOnline]);

  return (
    <NetworkStyled id="btn-showNetwork" ref={refNetwork} conect={conect}>
      {isOnline === 'online' ? <p>{up} 🙌</p> : <p>{down} 😧</p>}
    </NetworkStyled>
  );
};

export default NetworkStatus;
