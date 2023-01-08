import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ResultTypes } from '@/constants/result-types';
import { Box, Button, Typography } from '@mui/material';
import { IFlightItemFareCategoriesSubItem } from '@/models/data';

export const FlightItemDetailItem = (props: IFlightItemDetailItem) => {
  const navigate = useNavigate();
  const { detail, isPromotionActive } = props;
  const { status, price: _price, brandCode, rights } = detail;

  const isAvailable = status === 'AVAILABLE';
  const isEcoFly = brandCode.toLowerCase() === 'ecofly';
  const isButtonDisabled = isPromotionActive && !isEcoFly;

  const price =
    isEcoFly && isPromotionActive ? _price.amount / 2 : _price.amount;

  const onSelectHandler = () => {
    const state = isAvailable
      ? {
          status: ResultTypes.Success,
          amount: price,
          currency: _price.currency
        }
      : { status: ResultTypes.Failure };
    navigate('/result', { state });
  };

  return (
    <Box
      width={400}
      display="flex"
      minHeight={300}
      alignItems="stretch"
      flexDirection="column"
      sx={{ backgroundColor: 'white' }}
    >
      <Box
        p={1}
        height={60}
        display="flex"
        alignItems="flex-start"
        bgcolor="secondary.light"
        justifyContent="space-between"
      >
        <Typography fontSize={16} fontWeight={600} textTransform="capitalize">
          {brandCode}
        </Typography>
        <Box display="flex" alignItems="flex-start">
          <Typography fontSize={12}>{_price.currency} </Typography>
          <Typography fontSize={16} ml={0.5}>
            {price}
          </Typography>
        </Box>
      </Box>
      <Box flex={1} border={1} borderColor="secondary.light">
        {rights.map((right, index) => (
          <Typography
            p={1}
            key={index}
            fontSize={12}
            borderBottom={1}
            borderColor="secondary.light"
          >
            {right}
          </Typography>
        ))}
      </Box>
      <Button
        fullWidth
        size="large"
        color="error"
        variant="contained"
        onClick={onSelectHandler}
        disabled={isButtonDisabled}
      >
        Ucusu Sec
      </Button>
    </Box>
  );
};

export interface IFlightItemDetailItem {
  detail: IFlightItemFareCategoriesSubItem;
  isPromotionActive: boolean;
}
