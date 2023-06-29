import React from 'react'
import { Box } from '@mui/material';

import { HeaderChat } from './HeaderChat';
import { Messages } from './Messages';
import { MessageForm } from './MessageForm';
import { useChat } from '../../hooks';


export const Chat: React.FC<{}> = () => {

  const { chatState: { activeChat } } = useChat();


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      borderLeft: 1
    }}>
      {
        activeChat && (
          <>
            <HeaderChat />
            <Messages />
            <MessageForm />
          </>
        )
      }
    </Box>
  )
}
