import React from 'react';
import styled from '@emotion/styled';
import { Remove, Add } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

enum CounterActions {
  Increment = 'COUNTER_INCREMENT',
  Decrement = 'COUNTER_DECREMENT'
}

export const CounterButton = (props: ICounterButtonProps) => {
  const { count, min = 1, max = 10, onChange } = props;

  const handleCountChange = (action: CounterActions) => {
    const newCount =
      action === CounterActions.Increment ? count + 1 : count - 1;

    if (newCount >= min && newCount <= max) {
      onChange(newCount);
    }
  };

  const StyledButton = styled(IconButton)({
    color: 'secondary.dark',
    width: 30,
    height: 30,
    padding: 0,
    borderRadius: 4
  });

  return (
    <Box display="flex">
      <StyledButton
        onClick={() => handleCountChange(CounterActions.Decrement)}
        sx={{
          bgcolor: count === min ? 'ButtonShadow' : 'secondary.light'
        }}
      >
        <Remove color="inherit" sx={{ fontSize: 20 }} />
      </StyledButton>
      <Typography fontSize={14} px={2} lineHeight={2}>
        {count}
      </Typography>
      <StyledButton
        onClick={() => handleCountChange(CounterActions.Increment)}
        sx={{
          bgcolor: count === max ? 'ButtonShadow' : 'secondary.light'
        }}
      >
        <Add color="inherit" sx={{ fontSize: 20 }} />
      </StyledButton>
    </Box>
  );
};

export interface ICounterButtonProps {
  count: number;
  min?: number;
  max?: number;
  onChange: (count: number) => void;
}
