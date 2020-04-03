import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = (...args) => {
  const [socket] = useState(() => io(...args));

  useEffect(() => {

    return () => {
      socket && socket.removeAllListeners();
      socket && socket.close();
    };
  }, []);

  return [socket];
};
