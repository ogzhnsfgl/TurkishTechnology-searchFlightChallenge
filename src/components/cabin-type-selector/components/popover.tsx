import React from 'react';
import { CabinTypes } from '@/constants/cabin-types';
import { CounterButton } from '@/components/counter-button';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Popover,
  PopoverProps,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';

import '../styles/cabin-type-selector.scss';

export const CabinTypeSelectorPopover = (
  props: ICabinTypeSelectorPopoverProps
) => {
  const {
    personCount,
    cabinType,
    setCabinType,
    setPersonCount,
    anchorEl,
    ...rest
  } = props;

  return (
    <Popover
      id="cabin-type-popover"
      open={!!anchorEl}
      anchorEl={anchorEl}
      className="cabin-type-selector__popover"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      PaperProps={{
        className: 'cabin-type-selector__popover-paper',
        sx: { overflow: 'visible' }
      }}
      {...rest}
    >
      <Box p={2} className="cabin-type-selector__popover-content">
        <FormControl>
          <FormLabel id="cabin-type" sx={{ fontSize: 14 }}>
            Kabin ve yolcu secimi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="cabin-type"
            name="cabin-type"
            value={cabinType}
            onChange={(_, v) => setCabinType(v as CabinTypes)}
          >
            <FormControlLabel
              value={CabinTypes.Economy}
              control={<Radio color="info" />}
              label="Economy Class"
              color="primary"
            />
            <FormControlLabel
              value={CabinTypes.Business}
              control={<Radio color="info" />}
              label="Business Class"
            />
          </RadioGroup>
        </FormControl>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={2}
        >
          <Typography fontSize={13} fontWeight={500}>
            Yolcu
          </Typography>
          <CounterButton onChange={setPersonCount} count={personCount} />
        </Box>
      </Box>
    </Popover>
  );
};

export interface ICabinTypeSelectorPopoverProps
  extends Omit<PopoverProps, 'open'> {
  setPersonCount: (count: number) => void;
  setCabinType: (cabinType: CabinTypes) => void;
  personCount: number;
  cabinType: CabinTypes;
}

export default CabinTypeSelectorPopover;
