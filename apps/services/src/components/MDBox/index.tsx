/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
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

import { forwardRef, FC } from 'react';

// @mui material components
import { BoxProps } from '@mui/material';

// Custom styles for MDBox
import MDBoxRoot from 'components/MDBox/MDBoxRoot';

// declaring props types for MDBox
export interface MDBoxProps extends BoxProps {
  variant?: 'contained' | 'gradient';
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  coloredShadow?: string;
}
interface ExtendedMDBoxProps extends MDBoxProps {
  [key: string]: any;
}

const MDBox: FC<ExtendedMDBoxProps> = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
    <MDBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  ),
);
MDBox.displayName = 'MDBox';

// Declaring default props for MDBox
MDBox.defaultProps = {
  variant: 'contained',
  bgColor: 'transparent',
  color: 'dark',
  opacity: 1,
  borderRadius: 'none',
  shadow: 'none',
  coloredShadow: 'none',
};

export default MDBox;
