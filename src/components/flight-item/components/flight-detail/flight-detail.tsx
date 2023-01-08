import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { FlightItemDetailItem } from './components/item';
import { IFlightItemFareCategoriesSubItem } from '@/models/data';

export const FlightItemDetail = (props: IFlightItemDetailProps) => {
  const { items, isPromotionActive, ...rest } = props;

  return (
    <Box display="flex" gap={2} p={2} {...rest}>
      {items.map((item, index) => (
        <FlightItemDetailItem
          key={index}
          detail={item}
          isPromotionActive={isPromotionActive}
        />
      ))}
    </Box>
  );
};

export interface IFlightItemDetailProps extends BoxProps {
  items: IFlightItemFareCategoriesSubItem[];
  isPromotionActive: boolean;
}
