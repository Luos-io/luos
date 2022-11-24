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
import Image from 'next/image';

import Link from 'components/link';
import VSCode from 'components/vscode';

import styles from './powered.module.scss';

const Powered = () => (
  <div className={styles.container}>
    <div className={styles.containerTitle}>
      <h2 className={styles.title}>
        More features powered by{' '}
        <Image
          src={'/assets/images/index/powered/luos.svg'}
          width={100}
          height={35}
          alt="luos-dark"
        />
        <span id="end-title-seo" style={{ display: 'none' }}>
          Luos
        </span>
      </h2>
    </div>
    <Grid container mt={10} mb={10} justifyContent={'center'} style={{ margin: '56px 0 24px 0' }}>
      <Grid item xs={12} md={4} lg={4} xl={4}>
        <List className={styles.list}>
          <ListItem className={styles.listItem} alignItems="flex-start">
            <ListItemAvatar className={styles.listIcon}>
              <PeopleAltIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              className={styles.listText}
              primary="Multimaster"
              secondary={
                'Any service can control any other, which allows you to have a fully distributed approach, or not...'
              }
            />
          </ListItem>
          <ListItem
            className={styles.listLink}
            alignItems="flex-start"
            component={Link}
            href="/documentation/luos-technology/services#service-properties"
          >
            <ListItemAvatar className={styles.listIcon}>
              <AbcIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              className={`${styles.listText} ${styles.textLink}`}
              primary="Service aliases management"
              secondary={
                'Luos provides you with a way to automatically retrieve values, so you don’t need to poll them.'
              }
            />
          </ListItem>
          <ListItem className={styles.listItem} alignItems="flex-start">
            <ListItemAvatar className={styles.listIcon}>
              <CachedIcon fontSize="large" className={styles.listIcon} />
            </ListItemAvatar>
            <ListItemText
              className={styles.listText}
              primary="Data auto-update"
              secondary={
                'Each service can have a convenient alias, allowing you to find and use it easily.'
              }
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={4} lg={4} xl={4}>
        <List sx={{ width: '100%' }} className={`${styles.list} ${styles.secondList}`}>
          <ListItem className={styles.listItem} alignItems="flex-start">
            <ListItemAvatar className={styles.listIcon}>
              <EventNoteIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              className={styles.listText}
              primary="Event-based"
              secondary={
                'You can choose to poll or wait for a callback for each event received by your service.'
              }
            />
          </ListItem>
          <ListItem
            className={styles.listLink}
            alignItems="flex-start"
            component={Link}
            href="/documentation/luos-technology/messages/object-dictionary"
          >
            <ListItemAvatar className={styles.listIcon}>
              <MenuBookIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              className={styles.listText}
              primary="Object dictionnary"
              secondary={
                'Luos is able to convert any unit on the fly, so there are no problems with data units.'
              }
            />
          </ListItem>
          <ListItem
            className={styles.listLink}
            alignItems="flex-start"
            component={Link}
            href="/documentation/luos-technology/services/routing-table#detection"
          >
            <ListItemAvatar className={styles.listIcon}>
              <ExploreIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              className={styles.listText}
              primary="Detection, hotplug & selfhealing"
              secondary={
                'Luos engine manages all your services at every step: creation, detection, hotplug, usage, sanity check, and exclusion in case of problems.'
              }
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} md={6} lg={6} className={styles.nebula}>
        <h2 className={`${styles.titleFooter} ${styles.underline}`}>
          Develop and scale your edge and embedded distributed software now
        </h2>
        <p className={styles.textGs}>
          Get started with Luos by setting up your development environment with your IDE and build
          your first embedded microservice.
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
export default Powered;
