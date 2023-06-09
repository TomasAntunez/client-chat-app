import React from 'react'
import { Paper, Button, Typography } from '@mui/material';


export const HeaderChat: React.FC<{}> = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "static",
        width: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        borderBottom: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        height: 60
      }}
    >
      <Typography variant='h4'>
        Contact
      </Typography>

      <Button
        style={{ textTransform: 'none' }}
        variant='outlined'
        sx={{ py: 0, fontSize: 15 }}
      >
        Close Chat
      </Button>
    </Paper>
  )
}
