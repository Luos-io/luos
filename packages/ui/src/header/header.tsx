import * as React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

import { HeaderProps, NavbarItemTypes } from './types';

export const Header = ({
  logo,
  Link,
  navbar,
  enableLightingButton,
}: HeaderProps) => {
  return (
    <nav className={styles.header}>
      {logo}
      <div className={clsx(styles.headerItemsRight, styles.navbar)}>
        {navbar.map((item, i) => {
          const { name, type } = item;
          const dropdownItems =
            type === NavbarItemTypes.DROPDOWN ? item.items : [];
          const href = type === NavbarItemTypes.LINK ? item.href : '#';

          return (
            <div key={`navbar-item-${i}`} className={clsx(styles.navbarItem)}>
              <Button
                className={clsx(
                  styles.navbarButton,
                  type === NavbarItemTypes.DROPDOWN
                    ? styles.navbarButtonDropdown
                    : styles.navbarButtonLink,
                )}
                href={href}
                component={Link}
              >
                {name}
              </Button>
              {type === NavbarItemTypes.DROPDOWN && (
                <ul className={clsx(styles.navbarDropdown)}>
                  {dropdownItems.map(({ name, href }) => (
                    <li>
                      <Button
                        className={clsx(styles.navbarButton)}
                        href={href}
                        component={Link}
                      >
                        {name}
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
        <IconButton>
          <GitHubIcon />
        </IconButton>
        {enableLightingButton && (
          <IconButton>
            <DarkModeOutlinedIcon />
          </IconButton>
        )}
      </div>
    </nav>
  );
};
export default Header;
