import React from 'react';
import { Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DarkIconButton } from '../icon-buttons/search-area-icon-button';

export const DatePicker = () => {
  return (
    <DarkIconButton>
      <Typography fontSize={14} mr={1.5}>
        Tarih
      </Typography>
      <CalendarMonthIcon fontSize="large" />
    </DarkIconButton>
  );
};
