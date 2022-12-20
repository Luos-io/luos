import AbcIcon from '@mui/icons-material/Abc';
import CachedIcon from '@mui/icons-material/Cached';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ExploreIcon from '@mui/icons-material/Explore';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useColorScheme } from '@mui/material/styles';
import Image from 'next/image';

import Link from 'components/link';
import VSCode from 'components/vscode';

import styles from './prefooter.module.scss';

const Prefooter = () => {
  const { mode, systemMode } = useColorScheme();
  return (
    <div className={styles.container}>
      <Grid container>
        <Grid item xs={12} md={6} lg={6} className={styles.nebula}>
          <h2 className={`${styles.titleFooter} ${styles.underline}`}>
            Develop and scale cyber-physical systems now
          </h2>
          <p className={styles.textGs}>
            Get started with Luos by setting up your development environment and build your first
            embedded microservices ready to be controlled by your digital twin.
          </p>
          <div className={styles.btnContainer}>
            <Button variant="contained" className={styles.pinkBtn} href="/tutorials/get-started">
              Get started <RocketLaunchIcon style={{ marginLeft: '10px' }} />
            </Button>
            <Button
              variant="contained"
              className={styles.whiteBtn}
              href="https://discord.gg/luos"
              rel="nofollow"
            >
              Join the community
            </Button>
          </div>
        </Grid>
        <VSCode className={styles.mobileNone} height={400} md={6} style={{ color: 'black' }}>
          <div className={styles.player}></div>
        </VSCode>
      </Grid>
    </div>
  );
};
export default Prefooter;
