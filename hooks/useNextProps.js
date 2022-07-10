import { useState, useEffect } from 'react';

const useNextProps = (nextProps) => {
  const [db, setDb] = useState(false);

  useEffect(() => {
    if (nextProps.length > 0) {
      setDb(true);
    } else {
    }
  }, [nextProps]);

  return {
    db,
  };
};

export default useNextProps;
