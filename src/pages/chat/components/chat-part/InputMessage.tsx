import React from 'react'
import { Box, Typography }from '@mui/material';

import { themePalette } from '../../../../config/Theme';


export const InputMessage: React.FC<{}> = () => {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'right',
    }}>
      <Box
        sx={{
          maxWidth: '80%',
          bgcolor: `${themePalette.SECONDARY_BG}`,
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
