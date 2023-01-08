import React from 'react';
import { Box } from '@mui/material';
import { ResultMessage } from '../message';
import { ResultTypes } from '@/constants/result-types';
import { ResultSuccessSummaryPrice } from './components/summary-price';

const ResultSuccess = (props: IResultSuccessProps) => {
  const { amount, currency } = props;

  const price = `${currency} ${amount} `;

  return (
    <Box>
      <ResultMessage state={ResultTypes.Success} />
      <ResultSuccessSummaryPrice price={price} />
    </Box>
  );
};

export interface IResultSuccessProps {
  amount: number;
  currency: string;
}

export default ResultSuccess;
