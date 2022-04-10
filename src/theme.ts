import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  customColor:{
    danger: '#FF0000'
  },
  palette: {
    primary: {
      main: '#5C5CFF',
      light: '#A4A4FF',
    },
    secondary: {
      main: '#9FA6AD',
    },
    success: {
      main: '#00C851',
    },
    error: {
      main: '#FF4444',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});