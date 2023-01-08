import React, { useCallback, useState } from 'react';
import cities from '@/data/cities.json';
import flightsData from '@/data/flights.json';
import { IFlightItem } from '@/models/data';
import withSuspense from '@/components/lazy';
import { useNavigate } from 'react-router-dom';
import { SearchBox } from '@/components/search-box';
import { CabinTypes } from '@/constants/cabin-types';
import { DatePicker } from '@/components/date-picker';
import { useLocaleStorage } from '@/hooks/useLocaleStorage';
import { CabinTypeSelector } from '@/components/cabin-type-selector';
import { getAvailableFlights } from '@/helpers/get-available-flights';
import { Box, GlobalStyles, Typography, useTheme } from '@mui/material';
import { IErrorMessageProps } from '@/components/errors/message/message';
import { SubmitIconButton } from '@/components/icon-buttons/submit-button';
import { FlightTakeoff, FlightLand, ChevronRight } from '@mui/icons-material';

const ErrorMessage = withSuspense<IErrorMessageProps>(
  React.lazy(() => import('@/components/errors/message/message'))
);

function Home() {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const { searchState } = useLocaleStorage();

  const [notFoundError, setNotFoundError] = useState('');
  const [personCount, setPersonCount] = useState(searchState.personCount ?? 1);
  const [cabinType, setCabinType] = useState(
    searchState.cabinType ?? CabinTypes.Economy
  );
  const [originCity, setOriginCity] = useState<string>(
    searchState.originCity ?? ''
  );
  const [destinationCity, setDestinationCity] = useState<string | ''>(
    searchState.destinationCity ?? ''
  );

  const onSelectDestinationCityHandler = useCallback((value: string | null) => {
    if (!value) return;

    setDestinationCity(value);
  }, []);

  const onSelectOriginCityHandler = useCallback((value: string | null) => {
    if (!value) return;

    setOriginCity(value);
  }, []);

  const onClickSubmitHandler = useCallback(() => {
    if (!originCity || !destinationCity) return;

    const _searchState = {
      cabinType,
      originCity,
      personCount,
      destinationCity
    };

    const flights = flightsData.flights as IFlightItem[];

    const availableFlights = getAvailableFlights(
      flights,
      originCity,
      destinationCity
    );

    if (availableFlights.length > 0) {
      localStorage.setItem('searchState', JSON.stringify(_searchState));
      navigate('/flights', { state: _searchState });
    } else {
      setNotFoundError('Aradiginiz kriterlere gore ucus bulunamadi');
      setTimeout(() => {
        setNotFoundError('');
      }, 3000);
    }
  }, [cabinType, destinationCity, navigate, originCity, personCount]);

  return (
    <Box
      mt="10vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <GlobalStyles
        styles={{
          body: { backgroundColor: palette.primary.main, color: '#fff' }
        }}
      />
      <Typography variant="h2" component="h1" fontSize={32} fontWeight={300}>
        Merhaba
      </Typography>
      <Typography variant="h3" component="h2" fontSize={26} fontWeight={300}>
        Nereyi kesfetmek istersiniz?
      </Typography>
      <Box
        p={2}
        mt={2}
        gap={1}
        display="flex"
        sx={{ bgcolor: 'primary.light' }}
      >
        <SearchBox
          options={cities}
          value={originCity}
          aria-label="Nereden?"
          placeholder="Nereden?"
          onChange={(_, v) => onSelectOriginCityHandler(v)}
          startAdornment={<FlightTakeoff sx={{ fontSize: 20 }} />}
        />
        <SearchBox
          options={cities}
          aria-label="Nereye?"
          placeholder="Nereye?"
          value={destinationCity}
          startAdornment={<FlightLand sx={{ fontSize: 20 }} />}
          onChange={(_, v) => onSelectDestinationCityHandler(v)}
        />
        <DatePicker />
        <CabinTypeSelector
          cabinType={cabinType}
          personCount={personCount}
          setCabinType={setCabinType}
          setPersonCount={setPersonCount}
        />
        <SubmitIconButton
          size="large"
          type="submit"
          sx={{ p: 0 }}
          onClick={onClickSubmitHandler}
        >
          <ChevronRight sx={{ fontSize: 44 }} />
        </SubmitIconButton>
      </Box>
      {notFoundError ? <ErrorMessage message={notFoundError} /> : null}
    </Box>
  );
}

export default Home;

export interface ISearchFormState {
  originCity: string;
  destinationCity: string;
  cabinType: string;
  personCount: number;
}
