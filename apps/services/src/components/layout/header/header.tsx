import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Link from 'components/link';
import HeaderMenu from 'components/layout/header/headerMenu';

import pjson from 'package.json';

import Styles from 'components/layout/header/header.module.scss';

interface HeaderProps {
  toogleLight: () => void;
}
export const ButtonAppBar = ({ toogleLight }: HeaderProps) => {
  const { data: session } = useSession();

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'menuRessources',
  });

  const popupStateCom = usePopupState({
    variant: 'popover',
    popupId: 'menuCom',
  });

  return (
    <AppBar className={Styles.navBar} position="static">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={4} display="flex" alignItems="center">
            <Link href="/">
              <Image
                src="/assets/images/logo_luos_animated_white.gif"
                alt="Luos Logo"
                width="86"
                height="30"
              />
            </Link>
            <span style={{ fontSize: '10px', color: 'white' }}>Toolkit Alpha {pjson.version}</span>
          </Grid>

          <Grid item xs={7} display="flex" alignItems="center" justifyContent="flex-end">
            <Link href="https://www.luos.io" target="_blank">
              Technology
            </Link>
            <Link href="/">Tools</Link>
            <Button {...bindHover(popupState)} className={Styles.dropdown} disableRipple={true}>
              Ressources <KeyboardArrowDownIcon />
            </Button>

            {/* @ts-ignore */}
            <HoverMenu
              {...bindMenu(popupState)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              MenuListProps={{
                className: 'dropdownMenu',
              }}
            >
              <MenuItem onClick={popupState.close} className={Styles.dropdownLink}>
                <Link
                  href="https://docs.luos.io/tutorials/get-started"
                  target={'_blank'}
                  className={Styles.dropdownLink}
                >
                  Get Started
                </Link>
              </MenuItem>
              <MenuItem onClick={popupState.close} className={Styles.dropdownLink}>
                <Link
                  href="https://docs.luos.io/tutorials/tutorials"
                  target={'_blank'}
                  className={Styles.dropdownLink}
                >
                  Tutorials
                </Link>
              </MenuItem>
              <MenuItem onClick={popupState.close} className={Styles.dropdownLink}>
                <Link
                  href="https://docs.luos.io/"
                  target={'_blank'}
                  className={Styles.dropdownLink}
                >
                  Documentation
                </Link>
              </MenuItem>
              <MenuItem onClick={popupState.close} className={Styles.dropdownLink}>
                <Link
                  href="https://docs.luos.io/faq/list"
                  target={'_blank'}
                  className={Styles.dropdownLink}
                >
                  Troubleshooting
                </Link>
              </MenuItem>
              <MenuItem onClick={popupState.close} className={Styles.dropdownLink}>
                <Link
                  href="https://www.luos.io/blog"
                  target={'_blank'}
                  className={Styles.dropdownLink}
                >
                  Blog
                </Link>
              </MenuItem>
            </HoverMenu>
            <Button {...bindHover(popupStateCom)} className={Styles.dropdown} disableRipple={true}>
              Community <KeyboardArrowDownIcon />
            </Button>

            {/* @ts-ignore */}
            <HoverMenu
              {...bindMenu(popupStateCom)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              MenuListProps={{
                className: 'dropdownMenu',
              }}
            >
              <MenuItem onClick={popupStateCom.close} className={Styles.dropdownLink}>
                <Link
                  href="https://discord.gg/luos"
                  target={'_blank'}
                  className={Styles.dropdownLink}
                >
                  Discord
                </Link>
              </MenuItem>
              <MenuItem onClick={popupStateCom.close} className={Styles.dropdownLink}>
                <Link
                  href="https://www.reddit.com/r/Luos/"
                  target={'_blank'}
                  className={Styles.dropdownLink}
                >
                  Reddit
                </Link>
              </MenuItem>
              <MenuItem onClick={popupStateCom.close} className={Styles.dropdownLink}>
                <Link
                  href="https://github.com/luos-io"
                  target={'_blank'}
                  className={Styles.dropdownLink}
                >
                  Github
                </Link>
              </MenuItem>
            </HoverMenu>
          </Grid>

          <Grid item xs={1} display="flex" alignItems="center" justifyContent="flex-end">
            {session ? (
              <HeaderMenu toogleLight={() => toogleLight()} />
            ) : (
              <Link className={Styles.navBar__session} href="/api/auth/signin">
                Login
              </Link>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default ButtonAppBar;
