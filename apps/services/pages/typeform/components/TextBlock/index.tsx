import React from 'react';
import styles from './Text.module.css';
import Grid from '@mui/material/Grid';
import Lottie from 'react-lottie';
import dashboardData from './json/dashboard.json';
import blocknoteData from './json/Blocnote.json';
import rocketData from './json/Rocket.json';
import disigningData from './json/Designing.json';

interface ItemProps {
  align: string;
  img: number;
  text: string[];
}

interface dataProps {
  // @typescript-eslint/no-explicit-any
  data: any;
  title: string;
}

type optionsDataProps = {
  [key: string]: dataProps;
};

function TextBlock(props: ItemProps) {
  const optionsData: optionsDataProps = {
    Xio4vkUumaAm: { data: dashboardData, title: 'Embedded MCUs' },
    TimuNSjoiNHk: { data: rocketData, title: 'Scalability' },
    gzdDUsQ1fbzs: { data: disigningData, title: 'Connectivity' },
    aysQYFPfWXkb: { data: blocknoteData, title: 'Project stage' },
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.img ? optionsData[props.img].data : null,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      {props.img ? (
        <div>
          <div className={styles.mobileNone}>
            <h2 className={styles.title}>{optionsData[props.img].title}</h2>
            <Grid container className={styles.container}>
              <Grid
                item
                md={props.align === 'left' ? 9 : 3}
                style={{
                  alignSelf: 'center',
                }}
              >
                {props.align === 'left' ? (
                  <p>{props.text}</p>
                ) : (
                  <Lottie options={defaultOptions} height={200} width={200} />
                )}
              </Grid>
              <Grid
                item
                md={props.align === 'left' ? 3 : 9}
                style={{
                  alignSelf: 'center',
                }}
              >
                {props.align === 'left' ? (
                  <Lottie options={defaultOptions} height={200} width={250} />
                ) : (
                  <p>{props.text}</p>
                )}
              </Grid>
            </Grid>
          </div>
          <div className={styles.desktopNone}>
            <h2 className={styles.title}>{optionsData[props.img].title}</h2>
            <Grid container className={styles.container}>
              <Grid item xs={12}>
                <Lottie options={defaultOptions} height={250} width={250} />
              </Grid>
              <Grid item xs={12}>
                <p>{props.text}</p>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TextBlock;
