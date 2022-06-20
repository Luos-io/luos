/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React TS Base Styles
import colors from 'styles/theme/base/colors';
import typography from 'styles/theme/base/typography';
import borders from 'styles/theme/base/borders';

const { info, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

// types
type Types = any;

const input: Types = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      '&:hover:not(.Mui-disabled):before': {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      '&:before': {
        borderColor: inputBorderColor,
      },

      '&:after': {
        borderColor: info.main,
      },
    },
  },
};

export default input;
