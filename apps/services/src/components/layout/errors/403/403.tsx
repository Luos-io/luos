import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Styles from './error.module.scss';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Error403(): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2} />
      <Grid item xs={8} sx={{ paddingTop: '10px !important' }}>
        <Paper elevation={3} className={Styles.error}>
          <div className={Styles.container}>
            <Image
              src="/assets/images/Wait_a_minute.svg"
              alt="Luos network"
              width="150"
              height="150"
            />
            <h1>Wait a minute</h1>
            <p>You must be logged in or have an account to access this page.</p>
            <Button
              href="/auth/signin?callbackUrl=http://localhost:3000/app"
              className={Styles.button}
              variant="contained"
            >
              Login
            </Button>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}
