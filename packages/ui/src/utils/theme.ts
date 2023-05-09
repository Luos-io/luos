import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const theme = extendTheme({
  shape: {
    borderRadius: 4,
  },
  colorSchemes: {
    light: {
      palette: {
        AppBar: {
          darkBg: '#fafafa',
        },
        background: {
          default: '#f5f8fa',
          paper: '#fafafa',
        },
        primary: {
          main: '#bd99ff',
          dark: '#a370ff',
          light: '#d7c2ff',
        },
        secondary: {
          main: '#81c8be',
        },
        text: {
          primary: '#000',
          secondary: '#fff',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#323334',
          paper: '#1e1e1e',
        },
        primary: {
          main: '#bd99ff',
          dark: '#a370ff',
          light: '#d7c2ff',
        },
        secondary: {
          main: '#81c8be',
        },
        text: {
          primary: '#fff',
          secondary: '#000',
        },
      },
    },
  },
});

export default theme;
