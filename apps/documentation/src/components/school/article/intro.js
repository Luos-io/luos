import React from 'react';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Image from '@site/src/components/Image';
import Requirement from './requirement';

import styles from './article.module.css';

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
                  src="/assets/images/school/category.svg"
                  alt="category"
                />
              </span>
              <span className={styles.counter}>{props.category}</span>
              <span>
                <Image
                  className={styles.materialIcons}
                  src="/assets/images/school/clock.svg"
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

        <Grid container spacing={5}>
          <Grid item md={6} xs={12}>
            <Requirement title="Prerequisites" list={props.requierements} color="#f5f5f5" />
          </Grid>
          <Grid item md={6} xs={12}>
            <Requirement
              title="Supported hardware"
              list={props.ressources}
              shortList={!!props.shortList}
              shortListSize={props.shortListSize}
              color="#f5f5f5"
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid container mt={3}>
        <Grid item xs={12}>
          <Requirement title="Summary" color="#FFFFFF" list={props.summary} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Introduction;
