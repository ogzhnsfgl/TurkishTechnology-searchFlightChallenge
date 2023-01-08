import React from 'react';
import { Box, BoxProps, Typography } from '@mui/material';

export const FlightItemInfoDetail = (props: IFlightItemInfoDetail) => {
  const { time, portCode, cityName, ...rest } = props;
  return (
    <Box {...rest}>
      <Typography fontSize={14} fontWeight={600}>
        {time}
      </Typography>
      <Typography fontSize={14} color="gray">
        {portCode}
      </Typography>
      <Typography fontSize={10} color="gray">
        {cityName}
      </Typography>
    </Box>
  );
};

export interface IFlightItemInfoDetail extends BoxProps {
  time: string;
  portCode: string;
  cityName: string;
}
