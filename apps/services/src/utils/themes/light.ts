import { createTheme } from '@mui/material';

import commonTheme from './common';

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    mode: 'light',
    background: {
      default: '#F5F5F5',
    },
  },
});
export default lightTheme;
