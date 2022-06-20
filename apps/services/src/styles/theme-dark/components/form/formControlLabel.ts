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
import colors from 'styles/theme-dark/base/colors';
import typography from 'styles/theme-dark/base/typography';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from 'styles/theme-dark/functions/pxToRem';

const { white } = colors;
const { size, fontWeightBold } = typography;

// types
type Types = any;

const formControlLabel: Types = {
  styleOverrides: {
    root: {
      display: 'block',
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
    },

    label: {
      display: 'inline-block',
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: white.main,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),

      '&.Mui-disabled': {
        color: white.main,
      },
    },
  },
};

export default formControlLabel;
