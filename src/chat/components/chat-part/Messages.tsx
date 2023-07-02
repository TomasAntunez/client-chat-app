import React from 'react'
import { Box, Stack } from '@mui/material';

import { Message } from './Message';
import { useChat } from '../../hooks';
import { useAuth } from '../../';


export const Messages: React.FC<{}> = () => {

  const { chatState: { messages } } = useChat();
  const { auth: { uid } } = useAuth();

  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        backgroundColor: 'secondary.main',
        pl: 5,
        pr: 8,
        py: 1,
      }}
    >
      <Stack spacing={1.4}>
        { 
          messages.length
            ? messages.map( ( item, index ) => (
                (uid !== item.from)
                  ? <Message key={index} type='received' message={item.message} />
                  : <Message key={index} type='sent' message={item.message} />
              ))
            : null
        }
      </Stack>
    </Box>
  )
}
