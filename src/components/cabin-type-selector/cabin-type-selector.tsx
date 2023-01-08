import React from 'react';
import withSuspense from '@/components/lazy';
import { Group, Boy } from '@mui/icons-material';
import { CabinTypes } from '@/constants/cabin-types';
import { ICabinTypeSelectorPopoverProps } from './components/popover';
import {
  CircularProgress,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';

import './styles/cabin-type-selector.scss';

const CabinTypeSelectorPopover = withSuspense<ICabinTypeSelectorPopoverProps>(
  React.lazy(() => import('./components/popover')),
  <CircularProgress
    sx={{ position: 'absolute', left: '50%', top: '50%', color: 'white' }}
  />
);

export const CabinTypeSelector = (props: ICabinTypeSelectorProps) => {
  const { cabinType, personCount, setCabinType, setPersonCount } = props;
  const { palette } = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const icon =
    personCount > 1 ? <Group fontSize="large" /> : <Boy fontSize="large" />;

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          backgroundColor: palette.secondary.dark,
          color: 'white',
          borderRadius: 0,
          width: 90,
          border: `1px solid ${palette.secondary.dark}`,
          '&:hover': {
            backgroundColor: palette.primary.main,
            border: `1px solid ${palette.common.white}`
          }
        }}
      >
        {icon}
        <Typography
          py={0.3}
          px={0.6}
          fontSize={14}
          position="absolute"
          top={0}
          right={0}
        >
          {personCount}
        </Typography>
      </IconButton>
      {anchorEl ? (
        <CabinTypeSelectorPopover
          anchorEl={anchorEl}
          onClose={handleClose}
          cabinType={cabinType}
          personCount={personCount}
          setCabinType={setCabinType}
          setPersonCount={setPersonCount}
        />
      ) : null}
    </>
  );
};

export interface ICabinTypeSelectorProps {
  setPersonCount: (count: number) => void;
  setCabinType: (cabinType: CabinTypes) => void;
  personCount: number;
  cabinType: CabinTypes;
}
