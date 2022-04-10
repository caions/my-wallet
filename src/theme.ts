import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#719A4E',
    },
    secondary: {
      main: '#BBDB90',
    },
    success: {
      main: '#00C8',
    },
    warning:{
      main: '#FF0'
    },
    error: {
      main: '#FF4444',
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