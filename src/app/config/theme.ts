import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    custom?: {
      shadows?: { [key: string]: string };
    };
  }
  interface ThemeOptions {
    custom?: {
      shadows?: { [key: string | number]: string };
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#163048',
      light: 'rgb(96 105 119 / 60%)',
      dark: '#232b38'
    },
    secondary: {
      main: '#6c757d',
      light: '#ced4da',
      dark: '#232b38'
    },
    error: {
      main: '#e81932'
    }
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    fontSize: 16
  },
  custom: {
    shadows: {
      1: '0 4px 8px 0 rgba(0,0,0,.05)'
    }
  }
});

export default theme;
