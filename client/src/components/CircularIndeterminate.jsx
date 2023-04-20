import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const CircularIndeterminate = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flexGrow: 1 }}>
      <CircularProgress />
    </Box>
  )
}

export default CircularIndeterminate;