import * as React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import { clsx } from 'clsx';

import { NavbarItemTypes } from './types';

import styles from './styles.module.scss';

import type { HeaderProps } from './types';

export const Header = ({ logo, navbar, enableLightingButton }: HeaderProps) => {
  const { mode, setMode, systemMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <nav className={styles.header}>
      {logo}
      <div className={clsx(styles.headerItemsRight, styles.navbar)}>
        {navbar.map((navbarItem, i) => {
          const { name: navbarItemName, type } = navbarItem;
          const dropdownItems =
            type === NavbarItemTypes.DROPDOWN ? navbarItem.items : [];
          const href = type === NavbarItemTypes.LINK ? navbarItem.href : '#';

          return (
            <div
              key={`${navbarItemName}-${i}`}
              className={clsx(styles.navbarItem)}
            >
              <Button
                className={clsx(
                  styles.navbarButton,
                  type === NavbarItemTypes.DROPDOWN
                    ? styles.navbarButtonDropdown
                    : styles.navbarButtonLink,
                )}
                href={href}
              >
                {navbarItemName}
              </Button>
              {type === NavbarItemTypes.DROPDOWN && (
                <ul className={clsx(styles.navbarDropdown)}>
                  {dropdownItems.map(({ name, href }, i) => (
                    <li key={`${navbarItemName}-dropdown-item-${i}`}>
                      <Button className={clsx(styles.navbarButton)} href={href}>
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
          <IconButton
            onClick={() => {
              if (mode === 'light') {
                setMode('dark');
              } else {
                setMode('light');
              }
            }}
          >
            {(mode === 'system' && systemMode === 'dark') || mode === 'dark' ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
        )}
      </div>
    </nav>
  );
};
export default Header;
