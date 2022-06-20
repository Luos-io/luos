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
import borders from 'styles/theme-dark/base/borders';
import typography from 'styles/theme-dark/base/typography';

// // Material Dashboard 2 PRO React TSUI Dashboard PRO helper functions
import pxToRem from 'styles/theme-dark/functions/pxToRem';
import rgba from 'styles/theme-dark/functions/rgba';

const { inputBorderColor, info, grey, transparent, white } = colors;
const { borderRadius } = borders;
const { size } = typography;

// types
type Types = any;

const inputOutlined: Types = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: rgba(inputBorderColor, 0.6),
      },

      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: info.main,
        },
      },
    },

    notchedOutline: {
      borderColor: rgba(inputBorderColor, 0.6),
    },

    input: {
      color: white.main,
      padding: pxToRem(12),
      backgroundColor: transparent.main,

      '&::-webkit-input-placeholder': {
        color: grey[100],
      },
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10),
    },

    multiline: {
      color: grey[700],
      padding: 0,
    },
  },
};

export default inputOutlined;
