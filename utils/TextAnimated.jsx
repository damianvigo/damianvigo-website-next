import { useEffect } from 'react';
import TextAnimatedModule from '../styles/TextAnimated.module.css';

const TextAnimated = (txt) => {
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const el = txt.current;
    if (!el) return;

    const originalText = 'DVDEV';
    const letters = originalText.split('');

    el.innerHTML = '';

    letters.forEach((letter) => {
      el.innerHTML += `
            <div>
                <span>${letter}</span>
                <span class=${TextAnimatedModule.secondLine} >${letter}</span>
            </div>
        `;
    });

    const mouseEnter = () => {
      if (!txt.current) return;
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
      if (!txt.current) return;
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
      if (el) {
        el.removeEventListener('mouseenter', mouseEnter);
        el.removeEventListener('mouseleave', mouseLeave);
        el.innerHTML = originalText;
      }
    };

    // console.log(txt.children.length);
  }, [txt]);
};

export default TextAnimated;
