import React from 'react';
import { SortOptions } from '../flights';
import { Box, Button, Typography } from '@mui/material';

export const FlightsContainerHeader = (props: IFlightsContainerHeaderProps) => {
  const { handleSortOptionChange } = props;

  return (
    <Box
      p={1}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      sx={{ backgroundColor: 'secondary.dark' }}
    >
      <Typography color="white" mr={2}>
        Siralama Kriteri
      </Typography>
      <Button
        sx={{
          border: '1px solid #fff',
          mr: 2,
          borderRadius: '4px',
          backgroundColor: 'primary.dark'
        }}
        variant="contained"
        onClick={() => handleSortOptionChange(SortOptions.Price)}
      >
        Ekonomi Kabin Ucreti
      </Button>
      <Button
        sx={{
          border: '1px solid #fff',
          borderRadius: '4px',
          backgroundColor: 'primary.dark'
        }}
        variant="contained"
        onClick={() => handleSortOptionChange(SortOptions.DepartureTime)}
      >
        Kalkis Saati
      </Button>
    </Box>
  );
};

export interface IFlightsContainerHeaderProps {
  handleSortOptionChange: (type: SortOptions) => void;
}
