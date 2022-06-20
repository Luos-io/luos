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

import { FC, ReactNode, forwardRef } from 'react';

// @mui material components
import { TypographyProps } from '@mui/material';

// Custom styles for MDTypography
import MDTypographyRoot from 'components/MDTypography/MDTypographyRoot';

// Material Dashboard 2 PRO React TS contexts
import { useMaterialUIController } from 'utils/contexts/mui';

// Declaring props types for MDTypography
export interface MDTypographyProps extends TypographyProps {
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
    | 'text'
    | 'white';
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold' | undefined;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  verticalAlign?:
    | 'unset'
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
    | 'top'
    | 'bottom';
  textGradient?: boolean;
  children: ReactNode;
  opacity?: number;
}

interface ExtendedMDTypographyProps extends MDTypographyProps {
  [key: string]: any;
}

const MDTypography: FC<ExtendedMDTypographyProps> = forwardRef(
  (
    { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
    ref,
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDTypographyRoot
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode,
        }}
      >
        {children}
      </MDTypographyRoot>
    );
  },
);
MDTypography.displayName = 'MDTypography';

// Declaring default props for MDTypography
MDTypography.defaultProps = {
  color: 'dark',
  fontWeight: undefined,
  textTransform: 'none',
  verticalAlign: 'unset',
  textGradient: false,
  opacity: 1,
};

export default MDTypography;
