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

/**
  The boxShadow() function helps you to create a box shadow for an element
 */

// Material Dashboard 2 PRO React TS Helper Functions
import rgba from 'styles/theme/functions/rgba';
import pxToRem from 'styles/theme/functions/pxToRem';

function boxShadow(
  offset: number[],
  radius: number[],
  color: string,
  opacity: number,
  inset: string = '',
): string {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity,
  )}`;
}

export default boxShadow;
