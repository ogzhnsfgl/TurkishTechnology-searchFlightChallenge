import React from 'react';
import { Divider, DividerProps } from '@mui/material';

export const FlightItemInfoDivider = (props: IFlightItemInfoDivider) => {
  const { sx, ...rest } = props;
  return (
    <Divider
      sx={{
        width: '200px',
        height: '1px',
        backgroundColor: '#000',
        ...sx
      }}
      {...rest}
    />
  );
};

export interface IFlightItemInfoDivider extends DividerProps {}
