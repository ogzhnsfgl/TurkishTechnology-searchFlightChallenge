import React from 'react';
import { IFlightItem } from '@/models/data';
import { Box, useTheme } from '@mui/material';
import { FlightItemInfoDetail } from './components/detail';
import { FlightItemInfoDivider } from './components/divider';
import { FlightItemInfoDuration } from './components/duration';

export const FlightItemInfo = (props: IPromotionSwitchProps) => {
  const { data } = props;
  const {
    arrivalDateTimeDisplay,
    departureDateTimeDisplay,
    destinationAirport,
    flightDuration,
    originAirport
  } = data;
  const { custom } = useTheme();

  return (
    <Box
      p={2}
      width={400}
      display="flex"
      alignItems="center"
      boxShadow={custom?.shadows![1]}
      sx={{ backgroundColor: 'white' }}
    >
      <FlightItemInfoDetail
        portCode={originAirport.code}
        time={departureDateTimeDisplay}
        cityName={originAirport.city.name}
      />
      <FlightItemInfoDivider sx={{ mx: 1 }} />
      <FlightItemInfoDetail
        textAlign="right"
        time={arrivalDateTimeDisplay}
        portCode={destinationAirport.code}
        cityName={destinationAirport.city.name}
      />
      <FlightItemInfoDuration ml={3} time={flightDuration} />
    </Box>
  );
};

export interface IPromotionSwitchProps {
  data: IFlightItem;
}
