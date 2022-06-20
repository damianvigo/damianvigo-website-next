import { useEffect } from 'react';
import TextAnimatedModule from '../styles/TextAnimated.module.css';

const TextAnimated = (txt) => {
  // console.log(txt);
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const ref = txt.current;
    /* const txt = document.getElementById('dvdev'); */
    // console.log(txt);
    const letters = txt.current.innerText.split('');
    // console.log(letters);

    txt.current.innerText = '';

    letters.forEach((letter) => {
      // let caracter = letter === ' ' ? '&nbsp;' : letter;

      txt.current.innerHTML += `
            <div>
                <span>${letter}</span>
                <span class=${TextAnimatedModule.secondLine} >${letter}</span>
            </div>
        `;
    });

    const mouseEnter = () => {
      let count = 0;

      const interval = setInterval(() => {
        if (count < txt.current.children.length) {
          txt.current.children[count].classList.add('animation');
          count += 1;
        } else {
          clearInterval(interval);
        }
      }, 30);
    };

    txt.current.addEventListener('mouseenter', mouseEnter);

    const mouseLeave = () => {
      let count = 0;

      const interval = setInterval(() => {
        if (count < txt.current.children.length) {
          txt.current.children[count].classList.remove('animation');
          count += 1;
        } else {
          clearInterval(interval);
        }
      }, 30);
    };

    txt.current.addEventListener('mouseleave', mouseLeave);

    return () => {
      ref.removeEventListener('mouseenter', mouseEnter);
      ref.removeEventListener('mouseleave', mouseLeave);
    };

    // console.log(txt.children.length);
  }, [txt]);
};

export default TextAnimated;
