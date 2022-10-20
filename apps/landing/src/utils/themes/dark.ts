import { createTheme } from '@mui/material/styles';

import { commonTheme } from './common';

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    mode: 'dark',
    background: {
      default: '#171923',
    },
  },
});
export default darkTheme;
