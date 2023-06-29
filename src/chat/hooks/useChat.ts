import { useContext } from 'react';

import { ChatContext } from '../context';


export const useChat = () => {
  const context = useContext( ChatContext );
  if (!context) throw new Error('No Context');
  return context;
}
