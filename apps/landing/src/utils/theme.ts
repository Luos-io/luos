import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { theme as defaultTheme } from '@packages/ui';

import { Link } from 'components/link';

export const theme = extendTheme({
  ...defaultTheme,
  components: {
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
  },
});
export default theme;
