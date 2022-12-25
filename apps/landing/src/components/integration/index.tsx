import { useState } from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import VSCode from 'components/vscode';
import integrationsData from 'components/integration/data';
import { IntegrationTypeKey } from 'components/integration/types';

import styles from 'components/integration/integration.module.scss';

const Integration = () => {
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
      <VSCode
        title="Integrations"
        carousel={integrationsData.reduce(
          (acc, { label, integrations }, i) => {
            acc.push({
              name: label,
              content: (
                <Grid item xs={12} className={styles.player}>
                  <ImageList cols={cols}>
                    {integrations.map((integration, i) => (
                      <a
                        href={integration.link}
                        className={integration.link !== '' ? styles.imgLink : styles.imgLinkDisable}
                        key={`integration-link-${integration.label}`}
                      >
                        <ImageListItem key={i}>
                          <Image
                            src={`/assets/images/index/integration/icons/${integration.name}.svg`}
                            width={64}
                            height={64}
                            alt={`integration-image-${integration.label}`}
                            loading="lazy"
                            style={{ display: 'block', margin: '0 auto' }}
                          />
                          <div>
                            <ImageListItemBar
                              title={integration.label}
                              position="below"
                              style={{
                                margin: '0 auto',
                                textAlign: 'center',
                              }}
                            />
                          </div>
                        </ImageListItem>
                      </a>
                    ))}
                  </ImageList>
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
        xs={11}
        md={10}
        xl={9}
        style={{ margin: '0 auto' }}
      ></VSCode>
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
