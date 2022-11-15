import React from 'react';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Image from '@site/src/components/Image';

import styles from './article.module.css';
import Requirement from './requirement';

export const Introduction = (props) => {
  const keyword = props.tags;
  return (
    <div style={{ marginTop: '-65px' }}>
      <Paper className={styles.introContainer} elevation={1}>
        <Grid className={styles.titleContainer} container>
          <Grid item md={7} xs={12}>
            <h1 className={styles.title}>{props.title}</h1>
          </Grid>
          <Grid item md={5} xs={12}>
            <div className={styles.navigation}>
              <span>
                <Image
                  className={styles.categoryIcons}
                  sources={{ light: '/assets/images/tutorials/school/category.svg' }}
                  alt="category"
                />
              </span>
              <span className={styles.counter}>{props.category}</span>
              <span>
                <Image
                  className={styles.materialIcons}
                  sources={{ light: '/assets/images/tutorials/school/clock.svg' }}
                  alt="clock"
                />
              </span>
              <span className={styles.lastCounter}>{props.time}</span>
            </div>
            <div className={`${styles.difficultyContainer}`}>
              <span className={`${styles.difficulty} ${props.level}`}></span>
              <span>{props.level}</span>
            </div>
          </Grid>
        </Grid>
        <h2 className={styles.subtitle}>What you will learn:</h2>
        <p>{props.desc}</p>
        <Stack direction="row" spacing={1} marginBottom={2}>
          {keyword.map((element, index) => (
            <Chip key={index} label={element} className={styles.chipCustom} size="small" />
          ))}
        </Stack>
      </Paper>
    </div>
  );
};

export default Introduction;
