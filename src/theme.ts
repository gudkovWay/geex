import { createTheme, ThemeOptions } from '@mui/material/styles';

const theme: ThemeOptions = {
  spacing: 8,
  typography: {
    fontFamily: [
      'Inter'
    ].join(','),
    body1: {
      fontWeight: 548,
      fontSize: 14
    },
    body2: {
      fontWeight: 500,
      fontSize: 14,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 12,
    },
    h2: {
      fontWeight: 600,
      fontSize: 30
    },
    h3: {
      fontWeight: 600,
      fontSize: 20
    },
    h5: {
      fontWeight: 600,
      fontSize: 12
    },
  },
  palette: {
    primary: {
      main: '#ffffff',
      light: '#7b7ea5',
      dark: '#9395b8',
      contrastText: '#06082c',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1160,
    },
  }
};

export default createTheme(theme);
