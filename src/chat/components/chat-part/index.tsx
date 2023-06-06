import React from 'react'
import { Box } from '@mui/material';

import { HeaderChat } from './HeaderChat';
import { Messages } from './Messages';
import { MessageForm } from './MessageForm';


export const Chat: React.FC<{}> = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      borderLeft: 1
    }}>
      <HeaderChat />
      <Messages />
      <MessageForm />
    </Box>
  )
}
