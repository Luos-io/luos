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
import borders from 'styles/theme-dark/base/borders';

const { borderRadius } = borders;

// types
type Types = any;

const avatar: Types = {
  styleOverrides: {
    root: {
      transition: 'all 200ms ease-in-out',
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: 'auto',
    },
  },
};

export default avatar;
