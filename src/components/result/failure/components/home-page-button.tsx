import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonProps } from '@mui/material';

export function ResultFailureHomePageButton(
  props: IResultFailureHomePageButtonProps
) {
  const { sx, ...rest } = props;
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/');
  };

  return (
    <Button
      onClick={onClickHandler}
      sx={{ py: 1, px: 4, fontSize: 12, ...sx }}
      {...rest}
    >
      Başa Dön
    </Button>
  );
}

export interface IResultFailureHomePageButtonProps extends ButtonProps {}
