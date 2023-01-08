import React from 'react';
import { Box, LinearProgress } from '@mui/material';

const Loading = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={10}>
      <LinearProgress />
    </Box>
  );
};

export default Loading;
