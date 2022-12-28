import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import VSCode from 'components/vscode';

import styles from './prefooter.module.scss';

const Prefooter = () => (
  <div className={styles.container}>
    <Grid container>
      <Grid
        item
        container
        xs={12}
        md={6}
        lg={6}
        justifyContent={'center'}
        justifyItems={'center'}
        flexDirection={'column'}
        className={styles.nebula}
      >
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
      <VSCode className={styles.mobileNone} height={400} md={6}>
        <div className={styles.player}></div>
      </VSCode>
    </Grid>
  </div>
);
export default Prefooter;
