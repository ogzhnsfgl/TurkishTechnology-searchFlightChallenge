import React from 'react';
import styled from '@emotion/styled';
import { IconButton, IconButtonProps, useTheme } from '@mui/material';

export const SubmitIconButton = ({
  children,
  ...rest
}: IDarkIconButtonProps) => {
  const { palette } = useTheme();

  const StyledIconButton = styled(IconButton)({
    backgroundColor: palette.error.main,
    color: palette.common.white,
    borderRadius: 0,
    border: `1px solid ${palette.error.main}`,
    '&:hover': {
      backgroundColor: palette.error.light,
      border: `1px solid ${palette.error.dark}`
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
