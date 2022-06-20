import { useState } from 'react';
import Logout from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@mui/material/styles';
import { signOut, useSession } from 'next-auth/react';

import Link from 'components/link';

import Styles from 'components/layout/header/header.module.scss';

interface HeaderMenuProps {
  toogleLight: () => void;
}

export const HeaderMenu = ({ toogleLight }: HeaderMenuProps) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data: session } = useSession();

  const avatar = (name: string | null | undefined, image: string | null | undefined) => {
    const defaultOptions = {
      sx: { width: 32, height: 32 },
      alt: 'User avatar',
    };
    if (image) {
      return <Avatar {...defaultOptions} src={image}></Avatar>;
    } else if (name) {
      return <Avatar {...defaultOptions}>{name.charAt(0).toUpperCase()}</Avatar>;
    }

    return (
      <Avatar {...defaultOptions}>
        <PersonIcon />
      </Avatar>
    );
  };

  return (
    <div>
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          {avatar(session?.user?.name, session?.user?.image)}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            width: 300,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div className={Styles.themeContainer}>
          <h3>Theme</h3>
          <ToggleButtonGroup
            value={theme.palette.mode}
            onChange={() => toogleLight()}
            exclusive
            aria-label="text alignment"
          >
            <ToggleButton value="light" disabled={true} aria-label="left aligned">
              <LightModeIcon /> Light
            </ToggleButton>
            <ToggleButton disabled={true} value="center" aria-label="centered">
              <DesktopWindowsIcon /> System
            </ToggleButton>
            <ToggleButton disabled={true} value="dark" aria-label="right aligned">
              <DarkModeIcon /> Dark
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Divider />
        <Link href="/user/profile">
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
        </Link>
        <Divider />
        <Link
          className={Styles.logout}
          href=""
          onClick={() => {
            signOut();
            handleClose();
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};
export default HeaderMenu;
