import React from 'react';
import styled from '@emotion/styled';
import { IconButton, IconButtonProps, useTheme } from '@mui/material';

export const DarkIconButton = ({ children, ...rest }: IDarkIconButtonProps) => {
  const { palette } = useTheme();

  const StyledIconButton = styled(IconButton)({
    backgroundColor: palette.secondary.dark,
    color: 'white',
    borderRadius: 0,
    width: 90,
    border: `1px solid ${palette.secondary.dark}`,
    '&:hover': {
      backgroundColor: palette.primary.main,
      border: `1px solid ${palette.common.white}`
    }
  });

  return (
    <StyledIconButton size="large" {...rest}>
      {children}
    </StyledIconButton>
  );
};

export interface IDarkIconButtonProps extends IconButtonProps {
  children: React.ReactNode;
}
