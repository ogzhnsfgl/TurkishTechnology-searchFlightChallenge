import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { IMainLayoutBgColorTypes } from '../../main';

const MainLayoutHeader = (props: IMainLayoutHeaderProps) => {
  const { bgColor } = props;

  const dynamicColor = bgColor === 'dark' ? 'white' : 'black';

  const StyledBoldTypography = styled(Typography)({
    fontSize: '16px',
    fontWeight: '500',
    color: dynamicColor
  });

  const StyledTypography = styled(Typography)({
    fontSize: '16px',
    fontWeight: '300',
    color: dynamicColor
  });

  return (
    <Box
      mt={2}
      mx={2}
      height={16}
      display="flex"
      color="white"
      borderBottom={1}
      alignItems="center"
      borderColor={dynamicColor}
      justifyContent="space-between"
    >
      <StyledBoldTypography>turkishairlines.com</StyledBoldTypography>
      <Box component="span" display="flex">
        <StyledTypography>search</StyledTypography>
        <StyledBoldTypography>FlightChallange</StyledBoldTypography>
      </Box>
    </Box>
  );
};

export default MainLayoutHeader;

export interface IMainLayoutHeaderProps {
  bgColor?: IMainLayoutBgColorTypes;
}
