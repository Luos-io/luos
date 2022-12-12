import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { isDesktop } from 'react-device-detect';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import VSCode from 'components/vscode';
import Writer from 'components/writer';

import styles from './introduction.module.scss';

const Introduction = () => {
  const theme = useTheme();
  const mdMatches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div
      className={styles.container}
      style={{ padding: isDesktop ? theme.spacing(4, 11) : theme.spacing(3, 1) }}
    >
      <Grid container flexDirection={'column'}>
        <VSCode xs={12} md={12} lg={7} style={{ margin: mdMatches ? 'initial' : '0 auto' }}>
          <div style={{ margin: '0 25px 50px 25px' }}>
            <Writer
              textStyle={{
                color: theme.palette.primary.main,
                height: '70px',
                marginTop: '15px',
              }}
              startDelay={0}
              cursorColor={theme.palette.primary.main}
              multiTextLoop={true}
              multiText={[
                'is an open-source project_',
                'is an embedded microservice orchestrator_',
                'is an embedded library_',
                'is a distributed IPC_',
                'is a message broker_',
                'is an ecosystem_',
                'is an SDK_',
                'is a project toolset_',
                'is a community_',
              ]}
              multiTextDelay={2000}
              typeSpeed={100}
            />{' '}
            <p className={styles.text}>
              Luos makes it easy to develop and scale your edge and embedded distributed software.
              It's open source.
            </p>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={5}>
                <Button
                  variant="contained"
                  className={styles.pinkBtn}
                  href="/tutorials/get-started"
                >
                  Get started <RocketLaunchIcon style={{ marginLeft: '10px' }} />
                </Button>
              </Grid>
              <Grid item xs={12} lg={5}>
                <Button
                  variant="contained"
                  className={styles.whiteBtn}
                  href="https://discord.gg/luos"
                  rel="nofollow"
                >
                  Join the community
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  className={styles.videoBtn}
                  href="https://www.youtube.com/watch?v=ujh0xNE3TZ8"
                  rel="nofollow"
                >
                  Watch our video <PlayArrowIcon />
                </Button>
              </Grid>
            </Grid>
          </div>
        </VSCode>
        {isDesktop && (
          <VSCode
            md={6}
            lg={6}
            className={styles.mobileNone}
            style={{ alignSelf: 'flex-end', width: '100%', marginTop: '-100px', zIndex: 2 }}
          >
            <Grid item md={3} lg={3}>
              <span>
                <KeyboardArrowDownIcon className={styles.cardIcons} /> Video
              </span>
              <div className={styles.engine}>What is Luos engine?</div>
            </Grid>
            <Grid item md={9} lg={9}>
              <LiteYouTubeEmbed id="ujh0xNE3TZ8" title="What is Luos" />
            </Grid>
          </VSCode>
        )}
      </Grid>
    </div>
  );
};
export default Introduction;