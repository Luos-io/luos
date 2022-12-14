import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { isBrowser } from 'react-device-detect';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import VSCode from 'components/vscode';
import Writer from 'components/writer';

import styles from './introduction.module.scss';

const Introduction = () => {
  const theme = useTheme();
  const mdMatches = useMediaQuery(theme.breakpoints.up('md'));
  const lgMatches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div
      className={styles.container}
      style={{ padding: mdMatches ? theme.spacing(4, 11) : theme.spacing(3, 1) }}
    >
      <Grid container flexDirection={'column'}>
        <VSCode xs={12} lg={7} style={{ margin: mdMatches ? 'initial' : '0 auto' }}>
          <Box padding={theme.spacing(0, 3)}>
            <p className={styles.text1}>
              The devtool dedicated to cyber-physical systems making hardware as modular as
              software.
            </p>
            <Writer
              textStyle={{
                fontSize: '20px',
                color: theme.palette.primary.main,
                marginTop: theme.spacing(2),
              }}
              startDelay={0}
              cursorColor={theme.palette.primary.main}
              multiTextLoop={true}
              multiText={[
                'is an open-source project_',
                'is an embedded microservices orchestrator_',
                'is an embedded library_',
              ]}
              multiTextDelay={2000}
              typeSpeed={100}
            />
            <p className={styles.text2}>
              Don't waste time to create complex software architectures anymore. Luos allows you to
              easily develop and scale your cyber-physical systems. Our engine is free and open
              source.
            </p>
            <Grid
              className={styles.buttons}
              container
              {...{
                justifyContent: lgMatches ? 'initial' : 'center',
                spacing: lgMatches ? theme.spacing(2) : '0',
              }}
            >
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
          </Box>
        </VSCode>
        {isBrowser && (
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
