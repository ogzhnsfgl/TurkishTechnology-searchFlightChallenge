import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultTypes } from '@/constants/result-types';
import withSuspense from '@/components/lazy';
import { IResultSuccessProps } from '@/components/result/success';
import { Box } from '@mui/material';

const ResultFailure = withSuspense(
  React.lazy(() => import('@/components/result/failure/failure'))
);

const ResultSuccess = withSuspense<IResultSuccessProps>(
  React.lazy(() => import('@/components/result/success/success'))
);

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location, navigate]);

  if (!location.state) {
    return null;
  }

  const { status } = location.state;

  if (typeof location.state === 'undefined') {
    return null;
  }

  return (
    <Box mt={6}>
      {status === ResultTypes.Success ? (
        <ResultSuccess
          amount={location.state.amount}
          currency={location.state.currency}
        />
      ) : (
        <ResultFailure />
      )}
    </Box>
  );
};

export default Result;
