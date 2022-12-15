export enum NavbarItemTypes {
  LINK,
  DROPDOWN,
}

export type NavbarItemLink = {
  readonly type: NavbarItemTypes.LINK;
  href: string;
  active?: boolean;
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
  navbar: NavbarItem<NavbarItemLink | NavbarItemDropdown>[];
  enableLightingButton: boolean;
}
