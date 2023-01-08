import React, { useCallback, useEffect, useState } from 'react';
import flightsData from '@/data/flights.json';
import { IFlightItem } from '@/models/data';
import { ILSSearchState } from '@/models/local-storage';
import { useLocaleStorage } from '@/hooks/useLocaleStorage';
import { useLocation, useNavigate } from 'react-router-dom';
import { FlightsContainer } from '@/containers/flights/flights';
import { PromotionSwitch } from '@/components/promotion-switch';
import { Box, Chip, GlobalStyles, Typography } from '@mui/material';
import { getAvailableFlights } from '@/helpers/get-available-flights';

function Flights() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setPromotionState, isPromotionActive: _isPromotionActive } =
    useLocaleStorage();

  const [isPromotionActive, setIsPromotionActive] =
    useState(_isPromotionActive);

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location, navigate]);

  const handlePromotionChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsPromotionActive(event.target.checked);
      setPromotionState(event.target.checked);
    },
    [setPromotionState]
  );

  if (!location.state) {
    return <div>Yolculuk bilgileri bulunamadı.</div>;
  }

  const { originCity, destinationCity, personCount } =
    location.state as ILSSearchState;
  const flights = flightsData.flights as IFlightItem[];
  const availableFlights = getAvailableFlights(
    flights,
    originCity,
    destinationCity
  );

  return (
    <Box mt={2}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: 'white', color: 'black' }
        }}
      />
      <Chip
        label="Ucus"
        color="error"
        size="medium"
        sx={{ borderRadius: 0, fontSize: 12, px: 2 }}
      />
      <Typography
        mt={2}
        variant="h2"
        component="h1"
        fontSize={26}
        textTransform="capitalize"
      >
        {originCity} - {destinationCity}, {personCount} Yolcu
      </Typography>
      <PromotionSwitch
        checked={isPromotionActive}
        onChange={handlePromotionChangeHandler}
      />
      <Box>
        <FlightsContainer
          flights={availableFlights}
          isPromotionActive={isPromotionActive}
        />
      </Box>
    </Box>
  );
}

export default Flights;
