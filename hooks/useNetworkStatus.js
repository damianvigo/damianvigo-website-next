import { useEffect, useState } from 'react';

const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState('');

  useEffect(() => {
    const w = window,
      n = navigator;
    const online = () => {
      if (n.onLine) {
        setIsOnline('online');
      } else {
        setIsOnline('offline');
      }
    };

    w.addEventListener('online', online);
    w.addEventListener('offline', online);

    return () => {
      w.removeEventListener('online', online);
      w.removeEventListener('offline', online);
    };
  }, [isOnline]);

  return [isOnline, setIsOnline];
};

export default useNetworkStatus;
