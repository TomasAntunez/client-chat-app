import { useContext } from 'react';

import { AlertContext } from '../context';


export const useAlert = () => {
  const context =  useContext(AlertContext);
  if (!context) throw new Error('No context');
  return context;
};
