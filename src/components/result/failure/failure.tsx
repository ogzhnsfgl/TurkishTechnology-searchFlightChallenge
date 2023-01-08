import React from 'react';
import { Box } from '@mui/material';
import { ResultMessage } from '../message';
import { ResultTypes } from '@/constants/result-types';
import { ResultFailureHomePageButton } from './components/home-page-button';

export const ResultFailure = () => {
  return (
    <Box display="flex" flexDirection="column">
      <ResultMessage state={ResultTypes.Failure} />
      <ResultFailureHomePageButton
        variant="contained"
        color="error"
        sx={{ mt: 2, ml: 'auto' }}
      />
    </Box>
  );
};

export default ResultFailure;
