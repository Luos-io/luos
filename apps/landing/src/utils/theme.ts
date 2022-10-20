import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#bd99ff',
          dark: '#a370ff',
          light: '#d7c2ff',
        },
        secondary: {
          main: '#81c8be',
        },
        background: {
          default: '#f5f8fa',
          paper: '#fafafa',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#bd99ff',
          dark: '#a370ff',
          light: '#d7c2ff',
        },
        secondary: {
          main: '#81c8be',
        },
        background: {
          default: '#323334',
          paper: '#1e1e1e',
        },
      },
    },
  },
});

export default theme;
