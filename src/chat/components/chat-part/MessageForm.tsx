import { FC, FormEvent, useState } from 'react'
import { Paper, Button, TextField } from '@mui/material';

import { themePalette, useSocket, useAuth } from '../../';
import { useChat } from '../../hooks';


export const MessageForm: FC<{}> = () => {

  const { socket } = useSocket();
  const { auth: { uid } } = useAuth();
  const { chatState: { activeChat } } = useChat();

  const [ message, setMessage ] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ( !message ) return;

    socket?.emit( 'personal-message', {
      from: uid,
      to: activeChat,
      message
    });

    console.log(message);
    setMessage('');
  };


  return (
    <form onSubmit={ handleSubmit }>
      <Paper
        elevation={4}
        sx={{
          position: "static",
          width: '100%',
          borderRadius: 0,
          borderTop: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 6,
          pb: 6,
          pt: 8,
          height: 60,
          boxShadow: 'none',
          background: `linear-gradient(to top, ${themePalette.SECONDARY_BG}, ${themePalette.SECONDARY_COLOR})`
        }}
      >
        <TextField
          label="Your Message"
          multiline
          maxRows={2}
          variant="standard"
          fullWidth
          sx={{ mr: 7 }}
          value={ message }
          onChange={ e => setMessage(e.target.value) }
        />

        <Button
          style={{ textTransform: 'none' }}
          sx={{
            py: .5,
            px: 3,
            fontSize: 20
          }}
          type='submit'
        >
          Send
        </Button>
      </Paper>
    </form>
  )
}
