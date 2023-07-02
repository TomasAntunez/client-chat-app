import React from 'react'
import { Box, Typography }from '@mui/material';

import { themePalette } from '../..';


type MessageProps = {
  type: 'sent' | 'received';
  message: string;
}

export const Message: React.FC<MessageProps> = ({ type, message }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: `${ (type === 'sent') ? 'right' : 'left' }`
      }}
    >
      <Box
        sx={{
          maxWidth: '80%',
          bgcolor: `${ (type === 'sent') ? themePalette.SECONDARY_BG : themePalette.BG }`,
          py: 1.5,
          px: 3,
          borderRadius: 3
        }}
      >
        <Typography sx={{ fontSize: 14 }}>
            { message }
        </Typography>
      </Box>
    </Box>
  )
}
