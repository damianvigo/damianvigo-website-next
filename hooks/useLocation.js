import { useState, useEffect } from 'react';

const useLocation = () => {
  const [href, setHref] = useState('');

  useEffect(() => {
    const { href } = window.location;
    setHref(href);
  }, [href]);

  return { href };
};

export default useLocation;
