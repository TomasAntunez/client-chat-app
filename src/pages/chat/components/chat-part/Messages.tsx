import React from 'react'

import { Box, Stack } from '@mui/material';
import { InputMessage } from './InputMessage';
import { OutgoingMessage } from './OutgoingMessage';


export const Messages: React.FC<{}> = () => {

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14];


  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        backgroundColor: 'secondary.main',
        pl: 5,
        pr: 8,
        py: 0,
      }}
    >
      <Stack spacing={1.4}>
        { 
          data.length &&
            data.map( item => (
              (item % 2)
                ? <InputMessage key={item}/>
                : <OutgoingMessage key={item}/>
            ))
        }
      </Stack>
    </Box>
  )
}
