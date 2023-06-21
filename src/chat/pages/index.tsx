import React from "react"
import { Grid } from "@mui/material";

import { Inbox, Chat } from "../components";


export const ChatPage: React.FC<{}> = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Inbox/>
      </Grid>
      <Grid item xs={8}>
        <Chat />
      </Grid>
    </Grid>
  )
}
