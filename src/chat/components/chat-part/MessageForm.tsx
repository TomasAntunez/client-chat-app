import React from 'react'
import { Paper, Button, TextField } from '@mui/material';

import { themePalette } from '../../imports';


export const MessageForm: React.FC<{}> = () => {
  return (
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
      />

      <Button
        style={{ textTransform: 'none' }}
        sx={{
          py: .5,
          px: 3,
          fontSize: 20
        }}
      >
      Send
      </Button>
    </Paper>
  )
}
