import { useState, useEffect } from 'react';

const useNextProps = (nextProps) => {
  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState(true);

  useEffect(() => {
    if (nextProps.length > 0) {
      setLoading(true);
      setDb(true);
    } else {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
      setTimeout(() => {
        setDb(false);
      }, 2000);
    }
  }, [nextProps, loading]);

  return {
    loading,
    db,
  };
};

export default useNextProps;
