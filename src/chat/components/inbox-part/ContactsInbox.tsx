import React from 'react'
import { Avatar, Box, Divider, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';

import { userImage } from '../../assets/images';
import { useChat } from '../../hooks';
import { useAuth, themePalette } from '../../';
import { actionTypes } from '../../context';
import { getMessages } from '../../services';


export const ContactsInbox: React.FC<{}> = () => {

  const { chatState: { users, activeChat }, dispatch } = useChat();
  const { auth: { uid } } = useAuth();


  const handleClick = async (id: string) => {
    dispatch({
      type: actionTypes.ACTIVATE_CHAT,
      payload: id
    });

    try {
      const response = await getMessages(id);
      dispatch({
        type: actionTypes.LOAD_MESSAGES,
        payload: response.messages
      });
      
    } catch (error) {
      console.log(error);
    }
  };


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
          users.filter( user => user.uid !== uid ).map( user => (
            // TODO: Send to own component
            <Box
              key={user.uid}
              onClick={ () => handleClick(user.uid) }
              sx={ activeChat === user.uid ? { backgroundColor: themePalette.SECONDARY_COLOR } : {}}
            >
              <ListItemButton sx={{ py: 1 }}>
                <ListItemAvatar sx={{ mx: 2 }}>
                  <Avatar alt='perfil' src={ userImage } sx={{ height: 45, width: 45 }} />
                </ListItemAvatar>
                <ListItemText primary={`${user.name}`} secondary={ user.online ? 'online' : 'offline' } />
              </ListItemButton>
              <Divider />
            </Box>
          ))
        }
      </List>
    </Box>
  )
}
