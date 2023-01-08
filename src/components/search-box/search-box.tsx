import React, { forwardRef } from 'react';
import {
  Autocomplete,
  AutocompleteProps,
  InputAdornment,
  TextField
} from '@mui/material';

export const SearchBox = forwardRef((props: ISearchBoxProps, forwardedRef) => {
  const { placeholder, startAdornment, options, ...rest } = props;

  return (
    <Autocomplete
      options={options}
      clearIcon={null}
      id="country-select-demo"
      noOptionsText="Sonuç bulunamadı"
      sx={{ width: 200, bgcolor: 'white' }}
      getOptionLabel={(value: string) => value.toUpperCase()}
      renderInput={(params) => (
        <div>
          <TextField
            {...params}
            placeholder={placeholder}
            inputRef={forwardedRef}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start" sx={{ color: 'primary.dark' }}>
                  {startAdornment}
                </InputAdornment>
              ),
              sx: {
                fontSize: '1.3rem'
              }
            }}
            fullWidth
          />
        </div>
      )}
      {...rest}
    />
  );
});

export interface ISearchBoxProps
  extends Omit<AutocompleteProps<string, false, false, false>, 'renderInput'> {
  startAdornment?: React.ReactNode;
}

SearchBox.displayName = 'SearchBox';
