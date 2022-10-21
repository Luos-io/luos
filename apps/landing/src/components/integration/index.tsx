import React, { useState } from 'react';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import VSCode from 'components/vscode';
import integrationsData from 'components/integration/data';
import { IntegrationTypeKey } from 'components/integration/types';

import styles from 'components/integration/integration.module.css';

const Integration = () => {
  const [currentIntegrationType, setCurrentIntegrationType] = React.useState<IntegrationTypeKey>(
    IntegrationTypeKey.MCU,
  );
  const theme = useTheme();
  const lgMatches = useMediaQuery(theme.breakpoints.up('lg'));
  const smMatches = useMediaQuery(theme.breakpoints.up('sm'));
  const cols = lgMatches ? 4 : smMatches ? 3 : 2;

  return (
    <div className={styles.container}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4} lg={4} className={styles.imgLeftContainer}>
          <Image
            src="/assets/images/index/integration/line-right.svg"
            alt="line-right"
            width={353}
            height={120}
            className={styles.imgLeft}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4} style={{ paddingTop: 0 }}>
          <h2 className={`${styles.title} ${styles.underline}`}>Integrations</h2>
        </Grid>
      </Grid>
      <VSCode title="Integrations" xs={11} md={10} xl={9} style={{ margin: '0 auto' }}>
        <Grid item xs={3} className={styles.video}>
          <span className={styles.videoTitle}>
            <KeyboardArrowDownIcon className={styles.cardIcons} /> Integrations
          </span>

          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={currentIntegrationType}
            onChange={(event) =>
              setCurrentIntegrationType(event.target.value as IntegrationTypeKey)
            }
          >
            {integrationsData.map((integrationType) => (
              <FormControlLabel
                key={`integration-type-${integrationType.label}`}
                value={integrationType.key}
                label={integrationType.label}
                className={
                  currentIntegrationType === integrationType.key
                    ? styles.engineActive
                    : styles.engine
                }
                control={<Radio style={{ display: 'none' }} />}
              />
            ))}
          </RadioGroup>
        </Grid>
        <Grid item xs={9} className={styles.player}>
          <ImageList cols={cols}>
            {integrationsData.map((integrationType, i) => {
              const integrations = currentIntegrationType === integrationType.key;
              if (integrations) {
                return integrationType.integrations.map((integration) => (
                  <a
                    href={integration.link}
                    className={integration.link !== '' ? styles.imgLink : styles.imgLinkDesible}
                    key={`integration-link-${integration.label}`}
                  >
                    <ImageListItem key={i}>
                      <Image
                        src={`/assets/images/index/integration/icons/${integration.name}.svg`}
                        width={64}
                        height={64}
                        alt={`integration-image-${integration.label}`}
                        loading="lazy"
                      />
                      <div>
                        <ImageListItemBar
                          title={integration.label}
                          subtitle={integration.available ? '' : '(soon)'}
                          position="below"
                          style={{
                            width: '150px',
                            margin: '0 auto',
                            textAlign: 'center',
                          }}
                        />
                      </div>
                    </ImageListItem>
                  </a>
                ));
              }
              return null;
            })}
          </ImageList>
        </Grid>
      </VSCode>
      <Grid container justifyContent={'flex-end'}>
        <Grid item xs={6} md={4} lg={4} className={styles.imgRightContainer}>
          <Image
            src="/assets/images/index/integration/line-right.svg"
            alt="line-right"
            width={353}
            height={126}
            className={styles.imgRight}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Integration;
