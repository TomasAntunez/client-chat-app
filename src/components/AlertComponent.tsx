import { FC } from 'react'
import { Snackbar, Alert, AlertColor, Typography } from '@mui/material';


type AlertComponentProps = {
  open: boolean;
  msg: string;
  severity?: AlertColor;
  handleClose: () => void;
}

export const AlertComponent: FC<AlertComponentProps> = ({
  open, msg, severity, handleClose
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={ 6000 }
      open={ open }
      onClose={ handleClose }
    >
      <Alert
        onClose={ handleClose }
        severity={ severity }
      >
        <Typography>{ msg }</Typography>
      </Alert>
    </Snackbar>
  );
};
