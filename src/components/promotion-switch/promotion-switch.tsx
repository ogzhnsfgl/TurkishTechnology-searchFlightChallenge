import React from 'react';
import { Box, Switch, SwitchProps, Typography } from '@mui/material';

export const PromotionSwitch = (props: IPromotionSwitchProps) => {
  return (
    <Box py={3}>
      <Box display="flex" alignItems="center">
        <Typography mr={1} id="promotion-code" fontWeight={500} fontSize={13}>
          Promosyon Kodu
        </Typography>
        <Switch aria-labelledby="promotion-code" size="medium" {...props} />
      </Box>
      <Typography pb={1} fontWeight={400} fontSize={12}>
        Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini %50
        indirimle satin alabilirsiniz!
      </Typography>
      <Typography fontWeight={400} fontSize={12}>
        Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim
        yapılamamaktadır.
      </Typography>
    </Box>
  );
};

export interface IPromotionSwitchProps extends SwitchProps {}
