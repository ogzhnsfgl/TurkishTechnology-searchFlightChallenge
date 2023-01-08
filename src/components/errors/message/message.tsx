import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

const ErrorMessage = (props: IErrorMessageProps) => {
  const { message, ...rest } = props;

  return (
    <Typography py={2} fontSize={14} color="error" {...rest}>
      {message}
    </Typography>
  );
};

export interface IErrorMessageProps extends TypographyProps {
  message: string;
}

export default ErrorMessage;
