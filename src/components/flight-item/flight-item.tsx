import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { IFlightItem } from '@/models/data';
import { CabinTypes } from '@/constants/cabin-types';
import { FlightItemInfo } from './components/flight-info';
import { FlightItemDetail } from './components/flight-detail';
import { FlightItemCabinOption } from './components/flight-cabin-option';

export const FlightItem = (props: IFlightItemProps) => {
  const {
    data,
    index,
    isPromotionActive,
    selectedFareOption,
    setSelectedFareOption
  } = props;
  const { fareCategories } = data;

  const businessRadioValue = `${CabinTypes.Business}-${index}`;
  const economyRadioValue = `${CabinTypes.Economy}-${index}`;
  const isBusinessSelected = selectedFareOption === businessRadioValue;
  const isEconomySelected = selectedFareOption === economyRadioValue;

  const flightItemDetailItems = useMemo(() => {
    if (!selectedFareOption) return [];

    if (
      selectedFareOption !== businessRadioValue &&
      selectedFareOption !== economyRadioValue
    )
      return [];

    const [selectedCabinType] = selectedFareOption.split('-');

    const subcategories =
      selectedCabinType === CabinTypes.Business
        ? fareCategories.BUSINESS.subcategories
        : fareCategories.ECONOMY.subcategories;

    return subcategories.sort((a, b) => a.order - b.order);
  }, [
    businessRadioValue,
    economyRadioValue,
    fareCategories.BUSINESS.subcategories,
    fareCategories.ECONOMY.subcategories,
    selectedFareOption
  ]);

  const businessEcoFlyPrice = useMemo(
    () =>
      fareCategories.BUSINESS.subcategories.find((category) => {
        return category.order === 1;
      })?.price.amount as number,
    [fareCategories.BUSINESS.subcategories]
  );

  const economyEcoFlyPrice = useMemo(
    () =>
      fareCategories.ECONOMY.subcategories.find((category) => {
        return category.order === 1;
      })?.price.amount as number,
    [fareCategories.ECONOMY.subcategories]
  );

  const currency = useMemo(
    () => fareCategories.BUSINESS.subcategories[0].price.currency,
    [fareCategories.BUSINESS.subcategories]
  );

  const economyPriceShown = isPromotionActive
    ? economyEcoFlyPrice / 2
    : economyEcoFlyPrice;

  const businessPriceShown = isPromotionActive
    ? businessEcoFlyPrice / 2
    : businessEcoFlyPrice;

  return (
    <Box>
      <Box display="flex" gap={2}>
        <FlightItemInfo data={data} />
        <FlightItemCabinOption
          label="Economy"
          currency={currency}
          price={economyPriceShown}
          isSelected={isEconomySelected}
          onClick={() => setSelectedFareOption(economyRadioValue)}
          radioProps={{
            value: economyRadioValue,
            checked: isEconomySelected,
            onChange: () => setSelectedFareOption(economyRadioValue)
          }}
        />
        <FlightItemCabinOption
          label="Business"
          currency={currency}
          price={businessPriceShown}
          isSelected={isBusinessSelected}
          onClick={() => setSelectedFareOption(businessRadioValue)}
          radioProps={{
            value: businessRadioValue,
            checked: isBusinessSelected,
            onChange: () => setSelectedFareOption(businessRadioValue)
          }}
        />
      </Box>
      {flightItemDetailItems.length > 0 ? (
        <FlightItemDetail
          mt={2}
          display="flex"
          items={flightItemDetailItems}
          sx={{ backgroundColor: 'white' }}
          isPromotionActive={isPromotionActive}
        />
      ) : null}
    </Box>
  );
};

export interface IFlightItemProps {
  index: number;
  data: IFlightItem;
  isPromotionActive: boolean;
  selectedFareOption: string | null;
  setSelectedFareOption: (value: string) => void;
}
