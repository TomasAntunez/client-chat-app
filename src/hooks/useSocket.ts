import { useContext } from 'react';

import { SocketContext } from '../context';


export const useSocket = () => {
  const context =  useContext(SocketContext);
  if (!context) throw new Error('No context');
  return context;
};
