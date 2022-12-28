import Image from 'next/image';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import VSCode from 'components/vscode';
import integrationsData from 'components/integration/data';

import styles from 'components/integration/integration.module.scss';

const Integration = () => {
  const theme = useTheme();
  const lgMatches = useMediaQuery(theme.breakpoints.up('lg'));
  const smMatches = useMediaQuery(theme.breakpoints.up('sm'));
  const cols = lgMatches ? 4 : smMatches ? 3 : 2;

  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.underline}`}>Integrations</h2>
      <VSCode
        title="Integrations"
        xs={11}
        md={10}
        xl={9}
        style={{ margin: '0 auto', paddingBottom: 96 }}
      >
        <Grid item xs={12} className={styles.player}>
          <ImageList cols={cols}>
            {integrationsData.map(({ label, link, name }, i) => {
              return (
                <ImageListItem
                  className={link !== '' ? styles.imgLink : styles.imgLinkDisable}
                  component={link ? 'a' : 'div'}
                  key={`integration-link-${label}-${i}`}
                  href={link}
                >
                  <Image
                    src={`/assets/images/index/integration/icons/${name}.svg`}
                    width={64}
                    height={64}
                    alt={`integration-image-${label}`}
                    loading="lazy"
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                  <div>
                    <ImageListItemBar
                      title={label}
                      position="below"
                      style={{
                        margin: '0 auto',
                        textAlign: 'center',
                      }}
                    />
                  </div>
                </ImageListItem>
              );
            })}
          </ImageList>
        </Grid>
      </VSCode>
    </div>
  );
};
export default Integration;
