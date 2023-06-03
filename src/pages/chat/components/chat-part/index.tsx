import React from 'react'
import { Box } from "@mui/material";

import { HeaderChat } from './HearderChat';
import { Messages } from './Messages';
import { MessageForm } from './MessageForm';


export const Chat: React.FC<{}> = () => {
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      }}>
        <HeaderChat />
        <Messages />
        <MessageForm />
      </Box>
    </>
  )
}
