import Image from 'next/image';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ComputerIcon from '@mui/icons-material/Computer';
import LinkIcon from '@mui/icons-material/Link';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from './benefits.module.scss';

export const Benefits = () => {
  const theme = useTheme();
  const xsMatches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container className={styles.container}>
      <Grid item className={styles.imgLeftContainer}>
        <Image
          src="/assets/images/index/integration/line-right.svg"
          alt="line-right"
          width={xsMatches ? 176 : 353}
          height={xsMatches ? 60 : 120}
          className={styles.imgLeft}
        />
      </Grid>
      <Grid item container xs={12} marginTop={xsMatches ? '-32px' : '-64px'}>
        <h2 className={`${styles.title} ${styles.underline}`}>Benefits of Luos</h2>
        <Grid item className={styles.text}>
          Luos gives you access to multiple features created by developers for developers. <br />
          Many of these features are based on the needs of the community.
        </Grid>
      </Grid>
      <Grid container justifyContent={'center'} style={{ position: 'relative' }}>
        <Grid item xs={12} md={4}>
          <List className={styles.list}>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/documentation/integrations/pyluos"
            >
              <ListItemAvatar className={styles.listIcon}>
                <ComputerIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Digital Twins"
                secondary={
                  'You can natively remote-control any service anywhere on your computer, on another machine, or in a cloud application.'
                }
              />
            </ListItem>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/documentation/integrations"
            >
              <ListItemAvatar className={styles.listIcon}>
                <LinkIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Integrations"
                secondary={'Luos provides existing bridges with multiple other technologies.'}
              />
            </ListItem>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/tutorials/bootloader"
            >
              <ListItemAvatar className={styles.listIcon}>
                <AccountTreeIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Deployment"
                secondary={
                  'The bootloader feature allows you to update any firmware of your cyber-physical systems from anywhere.'
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <List className={`${styles.list} ${styles.secondList}`}>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="https://discord.gg/luos"
              rel="external nofollow"
            >
              <ListItemAvatar className={styles.listIcon}>
                <Image
                  src="/assets/images/socials/discord-white.svg"
                  alt="discord icon"
                  width={35}
                  height={35}
                />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Community"
                secondary={
                  'Join our community to exchange with other developers and collaborate on projects.'
                }
              />
            </ListItem>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/roadmap"
            >
              <ListItemAvatar className={styles.listIcon}>
                <ViewTimelineIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Soon"
                secondary={"We are always attentive to developers' needs to give them superpowers."}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container justifyContent={'flex-end'}>
        <Grid item xs={6} md={4} lg={4} className={styles.imgRightContainer}>
          <Image
            src="/assets/images/index/integration/line-right.svg"
            alt="line-right"
            width={xsMatches ? 176 : 353}
            height={xsMatches ? 60 : 120}
            className={styles.imgRight}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Benefits;
