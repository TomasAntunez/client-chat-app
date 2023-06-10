import { FC, createContext, useState } from 'react';
import { AlertColor } from '@mui/material';

import { AlertComponent } from '../components';


type ContextProps = {
  showError: (msg: string) => void;
}

export const AlertContext = createContext<ContextProps | null>(null);


export const AlertProvider: FC<{ children: JSX.Element }> = ({ children }) => {

  const [ open, setOpen ] = useState<boolean>(false);
  const [ msg, setMessage ] = useState<string>('');
  const [ severity, setSeverity ] = useState<AlertColor | undefined>(undefined);

  const showError = ( msg: string ) => {
    setSeverity('error');
    setMessage(msg);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <AlertContext.Provider value={{
      showError
    }}>
      <AlertComponent
        open={open}
        msg={msg}
        severity={severity}
        handleClose={handleClose}
      />
      { children }
    </AlertContext.Provider>
  );
};
