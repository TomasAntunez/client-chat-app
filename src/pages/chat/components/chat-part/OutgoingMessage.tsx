import React from 'react'
import { Box, Typography } from '@mui/material';

import { themePalette } from '../../../../config/Theme';


export const OutgoingMessage: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'left'
      }}
    >
      <Box
        sx={{
          maxWidth: '80%',
          bgcolor: `${themePalette.BG}`,
          py: 1.5,
          px: 3,
          borderRadius: 3
        }}
      >
      <Typography sx={{ fontSize: 14 }}>
        qw64ef54 wqe654f 65qwe4 f654qwe 65f4q we654f 65qw4ef 654qwe 564f 65we4 654we 65f4 wq65e4 65qwe4 
      </Typography>
      </Box>
    </Box>
  )
}
