import React from 'react'
import { Paper, Button, Typography } from '@mui/material';

import { useAuth } from '../..';


export const HeaderInbox: React.FC<{}> = () => {

  const { auth: { name }, logout } = useAuth();


  return (
    <Paper
      elevation={4}
      sx={{
        position: "static",
        width: '100%',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        height: 60
      }}
    >
      <Typography variant='h4'>
        { name }
      </Typography>

      <Button
        style={{ textTransform: 'none' }}
        variant='outlined'
        sx={{ py: 0, fontSize: 15 }}
        onClick={ logout }
      >
        Sign Off
      </Button>
    </Paper>
  )
}
