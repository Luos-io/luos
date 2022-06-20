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
import boxShadows from 'styles/theme/base/boxShadows';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from 'styles/theme/functions/pxToRem';
import linearGradient from 'styles/theme/functions/linearGradient';

const { white, gradients, grey, transparent } = colors;
const { borderWidth } = borders;
const { md } = boxShadows;

// types
type Types = any;

const switchButton: Types = {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: gradients.dark.main,

      '&:hover': {
        backgroundColor: transparent.main,
      },

      '&.Mui-checked': {
        color: gradients.dark.main,

        '&:hover': {
          backgroundColor: transparent.main,
        },

        '& .MuiSwitch-thumb': {
          borderColor: `${gradients.dark.main} !important`,
        },

        '& + .MuiSwitch-track': {
          backgroundColor: `${gradients.dark.main} !important`,
          borderColor: `${gradients.dark.main} !important`,
          opacity: 1,
        },
      },

      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: '0.3 !important',
      },

      '&.Mui-focusVisible .MuiSwitch-thumb': {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },
    },

    thumb: {
      backgroundColor: white.main,
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey[400]}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey[400],
      border: `${borderWidth[1]} solid ${grey[400]}`,
      opacity: 1,
    },

    checked: {},
  },
};

export default switchButton;
