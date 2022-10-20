import Image from 'next/image';
import React, { useState } from 'react';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MemoryIcon from '@mui/icons-material/Memory';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SearchIcon from '@mui/icons-material/Search';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import VSCode from 'components/vscode';
import anatomyData from 'components/anatomy/data';
import { AnatomyTypeKey } from 'components/anatomy/types';

import styles from './anatomy.module.css';

export const Anatomy = () => {
  const [currentAnatomyType, setCurrentAnatomyType] = React.useState<AnatomyTypeKey>(
    AnatomyTypeKey.TOPOLOGY,
  );

  console.log('TEST render', currentAnatomyType);
  return (
    <div className={styles.container}>
      <Grid container item xs={12} md={6} lg={6} xl={6}>
        <h2 className={`${styles.title} ${styles.underline}`}>Anatomy of Luos</h2>
        <p className={styles.text}>
          Luos gives you access to multiple features created by developers for developers. Many of
          these features are based on the needs of the community.
        </p>
      </Grid>

      <Grid container mt={5} mb={5} style={{ position: 'relative' }}>
        <Grid item xs={6} md={3} lg={3} xl={4}>
          <List className={styles.list}>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/documentation/luos-technology/basics#introduction-to-luos"
            >
              <ListItemAvatar className={styles.listIcon}>
                <ComputerIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Remote control"
                secondary={
                  'You can access the topology and routing table anywhere, even on your computer, another machine, or a cloud application.'
                }
              />
            </ListItem>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/tutorials/bootloader/intro"
            >
              <ListItemAvatar className={styles.listIcon}>
                <AccountTreeIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Bootloader"
                secondary={
                  'Luos engine allows you to update any firmware of your device, from anywhere.'
                }
              />
            </ListItem>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/tutorials/your-first-detection"
            >
              <ListItemAvatar className={styles.listIcon}>
                <MemoryIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Topology and routing table"
                secondary={
                  'Luos detects all the services in your system and locates them. It allows you to access and adapt to any feature from anywhere.'
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6} md={3} lg={3} xl={4}>
          <List className={`${styles.list} ${styles.secondList}`}>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/tutorials/get-started/get-started2"
            >
              <ListItemAvatar className={styles.listIcon}>
                <SearchIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Monitoring"
                secondary={
                  'You can control and monitor your device with several SDKs (Python, TS, Browser app, and others - coming soon).'
                }
              />
            </ListItem>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/documentation/luos-technology/services/timestamp"
            >
              <ListItemAvatar className={styles.listIcon}>
                <CalendarMonthIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Timestamp"
                secondary={
                  'Luos engine provides you with a distributed timestamp management system.'
                }
              />
            </ListItem>
            <ListItem
              className={styles.listLink}
              alignItems="flex-start"
              component={Link}
              href="/documentation/luos-technology/basics#introduction-to-luos"
            >
              <ListItemAvatar className={styles.listIcon}>
                <MiscellaneousServicesIcon fontSize="large" />
              </ListItemAvatar>
              <ListItemText
                className={styles.listText}
                primary="Microservice architecture"
                secondary={
                  'Luos follows the microservices philosophy. Luos engine is a library that allows you to conceptualize your features using small, independent and loosely coupled bricks.'
                }
              />
            </ListItem>
          </List>
        </Grid>
        <VSCode
          title="Anatomy"
          height={632}
          xs={12}
          md={6}
          lg={6}
          xl={4}
          style={{ alignContent: 'flex-start' }}
        >
          <Grid item xs={3} className={styles.video}>
            <span className={styles.videoTitle}>
              <KeyboardArrowDownIcon className={styles.cardIcons} /> Anatomy
            </span>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={currentAnatomyType}
              onChange={(event) => setCurrentAnatomyType(event.target.value as AnatomyTypeKey)}
            >
              {anatomyData.map((anatomyType) => (
                <FormControlLabel
                  key={`integration-type-${anatomyType.label}`}
                  value={anatomyType.key}
                  label={anatomyType.label}
                  className={
                    currentAnatomyType === anatomyType.key ? styles.engineActive : styles.engine
                  }
                  control={<Radio style={{ display: 'none' }} />}
                />
              ))}
            </RadioGroup>
          </Grid>
          <Grid
            item
            xs={9}
            className={styles.player}
            style={{
              backgroundImage: `url('assets/images/index/anatomy/illu/${currentAnatomyType}.svg')`,
            }}
          ></Grid>
        </VSCode>
      </Grid>
      <Grid container>
        <Grid item xs={4} md={4} lg={4} xl={4} className={styles.lines}>
          <Image
            src={'/assets/images/index/integration/line-right.svg'}
            width={30}
            height={30}
            alt="line-right"
            style={{ transform: 'rotateY(180deg)' }}
            className={styles.linesImg}
          />
        </Grid>
        <Grid item xs={4} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={4} md={4} lg={4} xl={4} className={styles.lines}>
          <Image
            src={'/assets/images/index/integration/line-right.svg'}
            width={30}
            height={30}
            alt="line-right"
            style={{ float: 'right' }}
            className={styles.linesImg}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Anatomy;
