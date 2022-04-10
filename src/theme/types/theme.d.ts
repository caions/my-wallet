import { Theme, TypographyStyle } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColor: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customColor?: {
      danger?: string;
    };
  }
}