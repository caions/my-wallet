import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    common:{
      black: '#161B21',
      white: '#DAE7F7'
    },
    primary: {
      main: '#719A4E',
    },
    secondary: {
      main: '#BBDB90',
    },
    success: {
      main: '#0033CC',
    },
    warning:{
      main: '#FFCC00'
    },
    error: {
      main: '#CC3300',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",

    allVariants:{
      color: '#161B21'
    }
  },
  customColor:{
    danger: '#FF0000'
  },
});