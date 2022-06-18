import { useEffect } from 'react';
import TextAnimatedModule from '../styles/TextAnimated.module.css';

const TextAnimated = () => {
  useEffect(() => {
    const txt = document.getElementById('dvdev');
    console.log(txt);
    const letters = txt.innerText.split('');
    console.log(letters);

    txt.innerText = '';

    letters.forEach((letter) => {
      // let caracter = letter === ' ' ? '&nbsp;' : letter;

      txt.innerHTML += `
            <div>
                <span>${letter}</span>
                <span class=${TextAnimatedModule.secondLine} >${letter}</span>
            </div>
        `;
    });

    const mouseEnter = () => {
      let count = 0;

      const interval = setInterval(() => {
        if (count < txt.children.length) {
          txt.children[count].classList.add('animation');
          count += 1;
        } else {
          clearInterval(interval);
        }
      }, 30);
    };

    txt.addEventListener('mouseenter', mouseEnter);

    const mouseLeave = () => {
      let count = 0;

      const interval = setInterval(() => {
        if (count < txt.children.length) {
          txt.children[count].classList.remove('animation');
          count += 1;
        } else {
          clearInterval(interval);
        }
      }, 30);
    };

    txt.addEventListener('mouseleave', mouseLeave);

    return () => {
      txt.removeEventListener('mouseenter', mouseEnter);
      txt.removeEventListener('mouseleave', mouseLeave);
    };

    // console.log(txt.children.length);
  }, []);
};

export default TextAnimated;
