import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = (...args) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io(...args));

    return () => {
      socket && socket.removeAllListeners();
      socket && socket.close();
    };
  }, []);

  return [socket];
};
