import React from 'react'
import { Box, Typography }from '@mui/material';

import { themePalette } from '../..';


type MessageProps = {
  type: 'sent' | 'received'
}

export const Message: React.FC<MessageProps> = ({ type }) => {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: `${ (type === 'sent') ? 'right' : 'left' }`
    }}>
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
            An input messagewerg464ewrg654ew6r5g46ew5r4g65e4w e65r4g we56r 65w4ere 6r5g4we6r54
        </Typography>
      </Box>
    </Box>
  )
}
