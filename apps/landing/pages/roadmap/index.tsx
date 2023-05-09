import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useColorScheme } from '@mui/material/styles';
import Image from 'next/image';
import { lazy, ReactNode, useEffect, useState } from 'react';

import Link from 'components/link';

import styles from './roadmap.module.scss';
import { Typography } from '@mui/material';

const TabPanel = ({
  children,
  value,
  index,
  ...other
}: {
  children: ReactNode;
  value: number;
  index: number;
}) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <div className={styles.tab}>{children}</div>
      </Box>
    )}
  </div>
);

export const Roadmap = () => {
  const { mode, systemMode } = useColorScheme();
  const [tabValue, setTabValue] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <div className={styles.roadmap}>
      <Typography variant={'h1'} fontSize={'3rem'} textAlign={'center'} padding={'32px 16px 0'}>
        Luos Roadmap
      </Typography>
      <Grid container justifyContent="center" padding={2}>
        <Grid item xs={10} md={8} marginBottom={1} padding={0} textAlign={'justify'} fontSize={18}>
          <p>
            This page is a preview of Luos’s product roadmap. The following graphic shows the next
            technical developments our team is and will be working on with the help of the
            community, quarter by quarter.
          </p>
          <p>This roadmap is updated every quarter.</p>
          <p>
            As part of an open source project, each of these subjects are open to contribution: it
            means that anyone from the Luos community can work on them and help the team in their
            developments. You can check out our&nbsp;
            <Link
              href="https://github.com/Luos-io/luos_engine/blob/main/CONTRIBUTING.md"
              target="_blank"
            >
              contribution’s guidelines on GitHub
            </Link>
            &nbsp;and&nbsp;
            <Link href="https://www.luos.io/documentation/contribute-to-luos" target="_blank">
              how to contribute on Luos Documentation
            </Link>
            .
          </p>
          <p>
            If you have any question about this roadmap or more generally about Luos, join in the
            community and chat with developers from all around the world!
          </p>

          <Box textAlign="center">
            <Button href="https://discord.gg/luos" variant="outlined" className={styles.btn}>
              Join the community
            </Button>
          </Box>
        </Grid>
        <Grid className={styles.image} item xs={10} md={8} marginBottom={0} padding={2}>
          <Image
            src={`/assets/images/roadmap/luos-roadmap-${
              mode === 'system' ? systemMode : mode ?? 'light'
            }.webp`}
            alt="luos roadmap"
            style={{ objectFit: 'contain' }}
            fill
            priority
          />
        </Grid>
        <Grid item xs={10} md={8} marginBottom={5}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={tabValue}
                onChange={(_, newTabValue) => {
                  setTabValue(newTabValue);
                }}
                TabIndicatorProps={{ style: { background: '#bd99ff' } }}
              >
                {['Engine', 'Tools'].map((value, i) => (
                  <Tab
                    key={`tabpanel-${i}`}
                    id={`tabpanel-${i}`}
                    aria-controls={`tabpanel-${i}`}
                    className={styles.tabLabel}
                    label={`Luos ${value}`}
                  />
                ))}
              </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
              <Typography variant="h4" className={styles.subtitle}>
                Luos engine v3
              </Typography>
              <Typography variant="h6" className={styles.releaseDate}>
                Q1 2023
              </Typography>
              <p>
                The main goal of Luos engine v3 is to drastically simplify the addition of various
                networks’ support into the Luos engine library. Luos engine will not be limited to
                the Robus network layer anymore, and will be able to deal with any kind of network.
              </p>
              <hr />
              <Typography variant="h4" className={styles.subtitle}>
                Multi-phy
              </Typography>
              <Typography variant="h5">Q3 2023</Typography>
              <p>
                Based on Luos engine v3, the multi-phy feature will allow Luos engine to deal with
                multiple and different networks at the same time (WiFi, CAN, Robus, …), acting like
                a switch. This feature will allow you to deal with multiple networks on your device,
                multiply data bandwidth, and break the frontier between your embedded networks and
                your cloud or computer applications.
              </p>
              <hr />
              <Typography variant="h4" className={styles.subtitle}>
                Luos web assembly
              </Typography>
              <Typography variant="h5">Q1 2024</Typography>
              <p>
                Thanks to multi-phy, you can now run Luos engine services everywhere, even on the
                cloud, on your computer, or on a mobile phone. To make it even more flexible, we
                will compile Luos engine in WebAssembly, allowing you to run services directly in
                your web browser. This web browser application will be visible by any embedded
                services and usable from anywhere.
              </p>
              <hr />
              <Typography variant="h4" className={styles.subtitle}>
                Luos certification
              </Typography>
              <Typography variant="h5">Q3 2024</Typography>
              <p>
                Luos engine certification will add connectivity rules to your nodes, allowing you to
                create white-lists, black-lists, or any conditional rules based on encrypted
                information on all your nodes. Your product, your rules.
              </p>
              <hr />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Typography variant="h4" className={styles.subtitle}>
                Luos hub
              </Typography>
              <Typography variant="h5">Q3 2023</Typography>
              <p>
                Luos hub is a registry allowing you to deal with your Luos packages revision as you
                want, and to easily reuse and share the services with other users.
              </p>
              <hr />
              <Typography variant="h4" className={styles.subtitle}>
                Luos inspector
              </Typography>
              <Typography variant="h5">Q1 2024</Typography>
              <p>
                Luos inspector will be a web application allowing you to inspect any event happening
                on your whole product at a nanosecond scale. You can use it to deeply understand and
                debug your entire product.
              </p>
              <hr />
              <Typography variant="h4" className={styles.subtitle}>
                Luos manager
              </Typography>
              <Typography variant="h5">Q3 2024</Typography>
              <p>
                Luos manager will provide a complete CI/CD interface allowing you to manage your
                product during the development phases and on post-production. This tool will allow
                you to easily manage your products’ configuration from A to Z, inspect any product,
                link bugs with inspection cession, or deploy a specific configuration to specific
                targets.
              </p>
              <hr />
            </TabPanel>
          </Box>
          <Box textAlign="center">
            <Button href="https://discord.gg/luos" className={styles.btn} variant="outlined">
              Join the community
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Roadmap;
