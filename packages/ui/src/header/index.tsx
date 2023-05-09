import clsx from 'clsx';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AppBar from '@mui/material/AppBar';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { useColorScheme, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext, useEffect, useState } from 'react';

import { HeaderProps, NavbarItemTypes } from './types';
import { SidebarContext } from '../utils/contexts/sidebar';

import styles from './styles.module.scss';

export const Header = (props: HeaderProps) => {
  const { mode, setMode, systemMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const theme = useTheme();
  const gtMD = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  const navbarElement = props.navbar.map((navbarItem, i) => {
    const { name: navbarItemName, type } = navbarItem;
    const dropdownItems =
      type === NavbarItemTypes.DROPDOWN ? navbarItem.items : [];
    const href = type === NavbarItemTypes.LINK ? navbarItem.href : '#';

    const desktopElement = () => (
      <div key={`${navbarItemName}-${i}`} className={clsx(styles.navbarItem)}>
        <Button
          className={clsx(
            styles.navbarButton,
            type === NavbarItemTypes.DROPDOWN
              ? styles.navbarButtonDropdown
              : styles.navbarButtonLink,
            type === NavbarItemTypes.LINK && navbarItem.active
              ? styles.navbarButtonActive
              : null,
          )}
          href={href}
        >
          {navbarItemName}
        </Button>
        {type === NavbarItemTypes.DROPDOWN && (
          <ul className={clsx(styles.navbarDropdown)}>
            {dropdownItems.map(({ name, href, active }, i) => (
              <li key={`${navbarItemName}-dropdown-item-${i}`}>
                <Button
                  className={clsx(
                    styles.navbarButton,
                    active ? styles.navbarButtonActive : null,
                  )}
                  href={href}
                >
                  {name}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );

    const mobileElement = () => {
      const expandProp = {
        expandIcon:
          type === NavbarItemTypes.DROPDOWN ? <ExpandMoreIcon /> : null,
      };
      const expanded = dropdownItems.some(({ active }) => active);
      return (
        <Accordion
          key={`${navbarItemName}-${i}`}
          disableGutters
          square
          defaultExpanded={expanded}
          sx={{
            width: '100%',
          }}
        >
          <AccordionSummary
            {...expandProp}
            aria-controls={`${navbarItemName}-${i}`}
            id={`${navbarItemName}-${i}`}
          >
            <Button
              className={clsx(
                styles.navbarButton,
                type === NavbarItemTypes.DROPDOWN
                  ? styles.navbarButtonDropdown
                  : styles.navbarButtonLink,
                type === NavbarItemTypes.LINK && navbarItem.active
                  ? styles.navbarButtonActive
                  : null,
              )}
              href={href}
            >
              {navbarItemName}
            </Button>
          </AccordionSummary>
          {type === NavbarItemTypes.DROPDOWN && (
            <AccordionDetails>
              <ul className={clsx(styles.navbarDropdown)}>
                {dropdownItems.map(({ name, href, active }, i) => (
                  <li key={`${navbarItemName}-dropdown-item-${i}`}>
                    <Button
                      className={clsx(
                        styles.navbarButton,
                        active ? styles.navbarButtonActive : null,
                      )}
                      href={href}
                    >
                      {name}
                    </Button>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          )}
        </Accordion>
      );
    };

    return gtMD ? desktopElement() : mobileElement();
  });

  return (
    <>
      <AppBar position={'sticky'}>
        <Toolbar className={clsx(styles.headerContentWrapper)}>
          <div className={clsx(styles.headerItemsLeft)}>
            <Button
              className={styles.burgerButton}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{
                display: gtMD ? 'none' : 'inline-flex',
              }}
            >
              {isSidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
            </Button>
            <Button href={'/'}>{props.logo}</Button>
          </div>
          {gtMD == true && (
            <Box
              component={'nav'}
              className={clsx(styles.headerItemsRight, styles.navbar)}
            >
              {navbarElement}
              <IconButton>
                <GitHubIcon />
              </IconButton>
              {props.enableLightingButton && (
                <IconButton
                  onClick={() =>
                    mode === 'light' ? setMode('dark') : setMode('light')
                  }
                >
                  {(mode === 'system' && systemMode === 'dark') ||
                  mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeIcon />
                  )}
                </IconButton>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {gtMD == false && (
        <Drawer
          variant='temporary'
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          style={{
            display: gtMD ? 'none' : 'block',
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80%' },
          }}
        >
          <Box component={'nav'} className={clsx(styles.navbarMobile)}>
            {navbarElement}
            <IconButton>
              <GitHubIcon />
            </IconButton>
            {props.enableLightingButton && (
              <IconButton
                onClick={() =>
                  mode === 'light' ? setMode('dark') : setMode('light')
                }
              >
                {(mode === 'system' && systemMode === 'dark') ||
                mode === 'dark' ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>
            )}
          </Box>
        </Drawer>
      )}
    </>
  );
};
export default Header;
export * from './types';
