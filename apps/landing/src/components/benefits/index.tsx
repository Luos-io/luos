import Image from 'next/image';
import { useState } from 'react';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ComputerIcon from '@mui/icons-material/Computer';
import LinkIcon from '@mui/icons-material/Link';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import SvgIcon from '@mui/material/SvgIcon';

import VSCode from 'components/vscode';
import benefitsData from 'components/benefits/data';
import { BenefitsTypeKey } from 'components/benefits/types';

import styles from './benefits.module.scss';
import DiscordIcon from '/static/assets/images/socials/discord.svg';

export const Benefits = () => {
  const [currentBenefitsType, setCurrentBenefitsType] = useState<BenefitsTypeKey>(
    BenefitsTypeKey.TOPOLOGY,
  );

  return (
    <div className={styles.container}>
      <Grid container item xs={12} md={6} lg={6} xl={6}>
        <h2 className={`${styles.title} ${styles.underline}`}>Benefits of Luos</h2>
        <p className={styles.text}>
          Luos gives you access to multiple features created by developers for developers. Many of
          these features are based on the needs of the community.
        </p>
      </Grid>
      <Grid container justifyContent={'center'} style={{ position: 'relative' }}>
        <Grid item xs={12} md={6} lg={3} xl={4}>
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
        <Grid item xs={12} md={6} lg={3} xl={4}>
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
        <VSCode
          className={styles.mobileNone}
          title="Benefits"
          height={632}
          carousel={benefitsData.reduce(
            (acc, benefitsType, i) => {
              acc.push({
                name: benefitsType.label,
                content: (
                  <Grid>
                    TEST #{i}
                    <Image
                      className={''}
                      src={`/assets/images/index/benefits/illu/${benefitsType.key}.svg`}
                      width={420}
                      height={150}
                      alt="line-left"
                    />
                  </Grid>
                ),
              });
              return acc;
            },
            [] as {
              name: string;
              content: JSX.Element;
            }[],
          )}
          xs={10}
          lg={6}
          xl={4}
          style={{ alignContent: 'flex-start' }}
        >
          <Grid item xs={3} className={styles.video}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={currentBenefitsType}
              onChange={(event) => setCurrentBenefitsType(event.target.value as BenefitsTypeKey)}
            >
              {benefitsData.map((benefitsType) => (
                <FormControlLabel
                  key={`integration-type-${benefitsType.label}`}
                  value={benefitsType.key}
                  label={benefitsType.label}
                  className={
                    currentBenefitsType === benefitsType.key ? styles.engineActive : styles.engine
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
              backgroundImage: `url('assets/images/index/benefits/illu/${currentBenefitsType}.svg')`,
            }}
          ></Grid>
        </VSCode>
      </Grid>
      <Grid container justifyContent={'space-between'}>
        <Grid className={styles.linesLeft} item xs={4}>
          <Image
            className={styles.linesImg}
            src={'/assets/images/index/integration/line-right.svg'}
            width={420}
            height={150}
            alt="line-left"
          />
        </Grid>
        <Grid className={styles.linesRight} item xs={4} alignSelf={'flex-end'}>
          <Image
            className={styles.linesImg}
            src={'/assets/images/index/integration/line-right.svg'}
            width={420}
            height={150}
            alt="line-right"
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Benefits;
