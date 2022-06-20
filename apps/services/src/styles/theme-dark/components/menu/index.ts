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
import boxShadows from 'styles/theme-dark/base/boxShadows';
import typography from 'styles/theme-dark/base/typography';
import colors from 'styles/theme-dark/base/colors';
import borders from 'styles/theme-dark/base/borders';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from 'styles/theme-dark/functions/pxToRem';

const { md } = boxShadows;
const { size } = typography;
const { text, background } = colors;
const { borderRadius } = borders;

// types
type Types = any;

const menu: Types = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: md,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: 'left',
      backgroundColor: `${background.card} !important`,
      borderRadius: borderRadius.md,
    },
  },
};

export default menu;
