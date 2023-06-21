import { FC, createContext, useState, useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

import { useAuth } from '../auth';


type ContextProps = {
  socket: Socket | null;
  online: boolean;
  connectSocket: () => void;
  disconnectSocket: () => void;
};

export const SocketContext = createContext<ContextProps | null>(null);


export const SocketProvider: FC<{ children: JSX.Element }> = ({ children }) => {

  const [ socket, setSocket ] = useState<Socket | null>(null);
  const [ online, setOnline ] = useState<boolean>(false);

  const { auth } = useAuth();


  const connectSocket = useCallback( () => {
    const temporarySocket = io( process.env.REACT_APP_BACKEND_URL, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true
    });
    setSocket( temporarySocket );
  }, []);

  const disconnectSocket = useCallback( () => {
    socket?.disconnect();
  }, [socket]);


  useEffect( () => {
    setOnline( socket?.connected || false );
    socket?.on( 'connect', () => setOnline(true) );
    socket?.on( 'disconnect', () => setOnline(false) );
  }, [socket]);


  useEffect( () => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect( () => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);


  return (
    <SocketContext.Provider value={{
      socket,
      online,
      connectSocket,
      disconnectSocket
    }}>
      { children }
    </SocketContext.Provider>
  );
};