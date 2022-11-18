import { LinkBaseProps } from '@mui/material';
import React from 'react';

export enum NavbarItemTypes {
  LINK,
  DROPDOWN,
}

export type NavbarItemLink = {
  readonly type: NavbarItemTypes.LINK;
  href: string;
};
export type NavbarItemDropdown = {
  readonly type: NavbarItemTypes.DROPDOWN;
  items: NavbarItem<NavbarItemLink>[];
};

export type NavbarItem<T extends NavbarItemLink | NavbarItemDropdown> = {
  name: string;
} & T;

export interface HeaderProps {
  logo: JSX.Element;
  Link: (props: {
    href: string;
    target?: React.HTMLAttributeAnchorTarget;
    className?: string;
    children: React.ReactNode;
  }) => JSX.Element;
  navbar: NavbarItem<NavbarItemLink | NavbarItemDropdown>[];
  enableLightingButton: boolean;
}
