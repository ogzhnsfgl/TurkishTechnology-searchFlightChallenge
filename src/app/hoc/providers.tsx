import React from 'react';
import theme from '../config/theme';
import router from '../config/router';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

const Providers = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default Providers;
