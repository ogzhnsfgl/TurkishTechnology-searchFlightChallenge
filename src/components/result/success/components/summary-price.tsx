import React from 'react';
import { Box, Typography } from '@mui/material';

export function ResultSuccessSummaryPrice(
  props: IResultSuccessSummaryPriceProps
) {
  const { price } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pt={2}
    >
      <Typography fontSize={26} fontWeight={300} color="secondary.main">
        Toplam Tutar
      </Typography>
      <Typography fontSize={26} color="darkcyan">
        {price}
      </Typography>
    </Box>
  );
}

export interface IResultSuccessSummaryPriceProps {
  price: string;
}
