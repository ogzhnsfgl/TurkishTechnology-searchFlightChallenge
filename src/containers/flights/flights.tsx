import React, { useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { FlightItem } from '@/components/flight-item';
import { IFlightItem } from '@/models/data';
import { ListSortTypes } from '@/constants/list-sort-types';
import { getSortedFlights } from '@/helpers/get-sorted-flights';
import { FlightsContainerHeader } from './components';

export enum SortOptions {
  DepartureTime = 'DepartureTime',
  Price = 'Price'
}

export const FlightsContainer = (props: IFlightsContainerProps) => {
  const { flights, isPromotionActive } = props;
  const [selectedFareOption, setSelectedFareOption] = useState<string>('');
  const [selectedSortOption, setSelectedSortOption] = useState<ListSortTypes>(
    ListSortTypes.DepartureTimeDescending
  );

  const sortedFlights = useMemo(() => {
    return getSortedFlights(flights, selectedSortOption);
  }, [flights, selectedSortOption]);

  const handleSortOptionChange = (type: SortOptions) => {
    switch (type) {
      case SortOptions.DepartureTime:
        if (selectedSortOption === ListSortTypes.DepartureTimeAscending) {
          setSelectedSortOption(ListSortTypes.DepartureTimeDescending);
        } else {
          setSelectedSortOption(ListSortTypes.DepartureTimeAscending);
        }
        break;
      case SortOptions.Price:
        if (selectedSortOption === ListSortTypes.PriceAscending) {
          setSelectedSortOption(ListSortTypes.PriceDescending);
        } else {
          setSelectedSortOption(ListSortTypes.PriceAscending);
        }
        break;
      default:
        break;
    }

    selectedFareOption && setSelectedFareOption('');
  };

  return (
    <Box>
      <FlightsContainerHeader handleSortOptionChange={handleSortOptionChange} />
      <Box
        p={2}
        gap={2}
        border={1}
        display="flex"
        flexDirection="column"
        borderColor="secondary.light"
        sx={{ backgroundColor: '#f9f9f9' }}
      >
        {sortedFlights.map((flight, index) => (
          <FlightItem
            key={index}
            data={flight}
            index={index}
            isPromotionActive={isPromotionActive}
            selectedFareOption={selectedFareOption}
            setSelectedFareOption={setSelectedFareOption}
          />
        ))}
      </Box>
    </Box>
  );
};

export interface IFlightsContainerProps {
  flights: IFlightItem[];
  isPromotionActive: boolean;
}

export interface ISelectedFareOptionState {
  index: number;
  fareOption: string;
}
