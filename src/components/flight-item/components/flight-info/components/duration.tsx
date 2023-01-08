import React from 'react';
import { Box, BoxProps, Typography } from '@mui/material';

export const FlightItemInfoDuration = (props: IFlightItemInfoDuration) => {
  const { time, ...rest } = props;
  return (
    <Box display="flex" flexDirection="column" alignItems="center" {...rest}>
      <Typography color="gray" noWrap>
        Ucus Suresi
      </Typography>
      <Typography fontWeight={600}>{time}</Typography>
    </Box>
  );
};

export interface IFlightItemInfoDuration extends BoxProps {
  time: string;
}
