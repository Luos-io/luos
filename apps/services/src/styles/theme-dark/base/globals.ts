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

const { info, dark } = colors;

const globals = {
  html: {
    scrollBehavior: 'smooth',
  },
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
  },
  'a, a:link, a:visited': {
    textDecoration: 'none !important',
  },
  'a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited': {
    color: `${dark.main} !important`,
    transition: 'color 150ms ease-in !important',
  },
  'a.link:hover, .link:hover, a.link:focus, .link:focus': {
    color: `${info.main} !important`,
  },
};

export default globals;
