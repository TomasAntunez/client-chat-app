import React from 'react'
import { Box } from '@mui/material';

import { HeaderInbox } from './HeaderInbox';
import { ContactsInbox } from './ContactsInbox';


export const Inbox: React.FC<{}> = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <HeaderInbox />
      <ContactsInbox />
    </Box>
  )
}
