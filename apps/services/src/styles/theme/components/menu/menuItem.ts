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
import borders from 'styles/theme/base/borders';
import typography from 'styles/theme/base/typography';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from 'styles/theme/functions/pxToRem';

const { light, text, dark } = colors;
const { borderRadius } = borders;
const { size } = typography;

// types
type Types = any;

const menuItem: Types = {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: 'unset',
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: 'background-color 300ms ease, color 300ms ease',

      '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
        backgroundColor: light.main,
        color: dark.main,
      },
    },
  },
};

export default menuItem;
