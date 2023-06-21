import React from 'react'
import { Avatar, Box, Divider, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';

import { userImage } from '../../assets/images';


export const ContactsInbox: React.FC<{}> = () => {

  const userList= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <Box sx={{
      flex: 1,
      overflow: 'auto'
    }}>
      <List
        sx={{
          width: "100%",
          py: 0
        }}
      >
        {
          userList.map( user => (
            <Box key={user}>
              <ListItemButton sx={{ py: 1 }}>
                <ListItemAvatar sx={{ mx: 2 }}>
                  <Avatar alt='perfil' src={ userImage } sx={{ height: 45, width: 45 }} />
                </ListItemAvatar>
                <ListItemText primary="Tomas Antunez" secondary="online" />
              </ListItemButton>
              <Divider />
            </Box>
          ))
        }
      </List>
    </Box>
  )
}
