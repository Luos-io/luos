import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { isBrowser } from 'react-device-detect';
import Carousel from 'react-material-ui-carousel';

import VSCode from 'components/vscode';

import styles from './software.module.scss';
import { useTheme } from '@mui/material';

const Software = () => {
  const theme = useTheme();

  let items = [
    {
      name: '1. ENCAPSULATION',
      description: 'Luos engine translates your embedded features into APIs.',
      file: 'STEP_1.c',
      img: 'step1',
    },
    {
      name: '2. EXPOSITION',
      description: 'Luos makes these APIs accessible from anywhere.',
      file: 'STEP_2.py',
      img: 'step2',
    },
    {
      name: '3. EXPLOITATION',
      description:
        'Luos provides you with integrations and tools to design the software architectures of your dreams.',
      file: 'STEP_3.js',
      img: 'step3',
    },
  ];

  const IndicatorIcons = [
    <Image
      src={'/assets/images/index/software/icons/step1.svg'}
      width={54}
      height={4}
      alt="software-step1"
      loading="lazy"
    />,
    <Image
      src={'/assets/images/index/software/icons/step2.svg'}
      width={54}
      height={4}
      alt="software-step2"
      loading="lazy"
    />,
    <Image
      src={'/assets/images/index/software/icons/step3.svg'}
      width={54}
      height={4}
      alt="software-step3"
      loading="lazy"
    />,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h2 className={`${styles.title} ${styles.underline}`}>
          Develop scalable cyber-physical systems
        </h2>
        <VSCode
          title="How it works"
          xs={11}
          md={10}
          xl={9}
          style={{ margin: '0 auto', paddingBottom: 24 }}
        >
          {isBrowser ? (
            <Grid container className={styles.carouselContainer}>
              <Grid item md={4} lg={4} xl={4} className={styles.step}>
                <div className={styles.file}>
                  <div className={styles.fileName}>step_1.c</div>
                </div>
                <Image
                  src={'/assets/images/index/software/step1.svg'}
                  alt="step one"
                  className={styles.carouselImgDesktop}
                  width={130}
                  height={130}
                  loading="lazy"
                />
                <h3 className={styles.carouselTitle}>1. ENCAPSULATION</h3>
                <p className={styles.carouselText}>
                  Luos engine reference all your features as services by providing APIs.
                </p>
              </Grid>
              <Grid item md={4} lg={4} xl={4} className={styles.step}>
                <div className={styles.file}>
                  <div className={styles.fileName}>step_2.py</div>
                </div>
                <Image
                  src={'/assets/images/index/software/step2.svg'}
                  alt="step two"
                  className={styles.carouselImgDesktop}
                  width={130}
                  height={130}
                  loading="lazy"
                />
                <h3 className={styles.carouselTitle}>2. EXPOSITION</h3>
                <p className={styles.carouselText}>
                  Detect and use any service API accessible from anywhere, no matter how specific
                  your network is.
                </p>
              </Grid>
              <Grid item md={4} lg={4} xl={4} className={styles.step}>
                <div className={styles.file}>
                  <div className={styles.fileName}>step_3.js</div>
                </div>
                <Image
                  src={'/assets/images/index/software/step3.svg'}
                  alt="step three"
                  className={styles.carouselImgDesktop}
                  width={130}
                  height={130}
                  loading="lazy"
                />
                <h3 className={styles.carouselTitle}>3. EXPLOITATION</h3>
                <p className={styles.carouselText}>
                  Compose your product step by step and make it evolutive and future-proof easily.
                </p>
              </Grid>
            </Grid>
          ) : (
            <Carousel
              className={styles.carouselContainer}
              IndicatorIcon={IndicatorIcons}
              indicatorIconButtonProps={{
                style: {
                  padding: theme.spacing(1),
                  filter: 'brightness(50%)',
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  filter: 'brightness(100%)',
                },
              }}
            >
              {items.map((item, i) => (
                <Paper className={styles.carousel} key={`software-carousel-item-${i}`}>
                  <div className={styles.file}>
                    <div className={styles.fileName}>{item.file}</div>
                  </div>
                  <Image
                    className={styles.carouselImg}
                    src={`/assets/images/index/software/${item.img}.svg`}
                    width={130}
                    height={130}
                    alt={`software-carousel-${item.img}`}
                    loading="lazy"
                  />
                  <h3 className={styles.carouselTitle}>{item.name}</h3>
                  <p className={styles.carouselText}>{item.description}</p>
                </Paper>
              ))}
            </Carousel>
          )}
        </VSCode>
      </div>
      <div className={styles.btnContainer}>
        <Button
          variant="contained"
          className={styles.pinkBtn}
          href="/blog/a-way-to-unleash-embedded-systems"
        >
          Read our blog posts
        </Button>
      </div>
    </div>
  );
};
export default Software;
