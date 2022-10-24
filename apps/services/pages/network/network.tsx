import * as React from 'react';
import { ServiceType } from '@luos-io/sdk-web';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import ReplayIcon from '@mui/icons-material/Replay';
import { useState, useEffect, useContext, SyntheticEvent } from 'react';

import Chart from 'components/chart/chart';
import { clientLogger as cLog } from 'utils/logger';
import { SDKContext } from 'utils/contexts/sdk';

import type { RTBData, ServiceStatistics, RTBNode } from '@luos-io/sdk-web';

import styles from './network.module.scss';

const { NEXT_PUBLIC_DEBUG } = process.env;

export const Network = (): JSX.Element => {
  const { sdk } = useContext(SDKContext);
  const [routingTable, setRoutingTable] = useState<RTBData>({
    protocol: -1,
    command: -1,
    mode: -1,
    size: -1,
    source: -1,
    target: -1,
    nodes: [],
  });

  const fakert = {
    protocol: -1,
    command: -1,
    mode: -1,
    size: -1,
    source: -1,
    target: -1,
    nodes: [
      {
        ID: 1,
        certificate: false,
        portTable: [2, 65535],
        services: [
          {
            ID: 1,
            type: 1,
            access: 32,
            alias: 'gate',
            firmware: null,
            statistics: {
              rx_msg_stack_ratio: 0,
              luos_stack_ratio: 5,
              tx_msg_stack_ratio: 5,
              buffer_occupation_ratio: 12,
              msg_drop_number: 41,
              max_loop_time_ms: 0,
              max_retry: 1,
            },
          },
          {
            ID: 2,
            type: 10,
            access: 0,
            alias: 'pipe_1',
            firmware: null,
            statistics: {
              rx_msg_stack_ratio: 126,
              luos_stack_ratio: 14,
              tx_msg_stack_ratio: 0,
              buffer_occupation_ratio: 64,
              msg_drop_number: 0,
              max_loop_time_ms: 32,
              max_retry: 0,
            },
          },
        ],
        Cert: '❌',
        'Port Table': [2, 65535],
        Services: 'gate, pipe_1',
      },
      {
        ID: 2,
        certificate: false,
        portTable: [1, 3],
        services: [
          {
            ID: 3,
            type: 2,
            access: 0,
            alias: 'rgb_led',
            firmware: null,
            statistics: {
              rx_msg_stack_ratio: 20,
              luos_stack_ratio: 20,
              tx_msg_stack_ratio: 20,
              buffer_occupation_ratio: 7,
              msg_drop_number: 0,
              max_loop_time_ms: 2,
              max_retry: 0,
            },
          },
        ],
        Cert: '❌',
        'Port Table': [1, 3],
        Services: 'rgb_led',
      },
      {
        ID: 3,
        certificate: false,
        portTable: [2, 4],
        services: [
          {
            ID: 4,
            type: 13,
            access: 32,
            alias: 'inspector',
            firmware: null,
            statistics: {
              rx_msg_stack_ratio: 5,
              luos_stack_ratio: 5,
              tx_msg_stack_ratio: 2,
              buffer_occupation_ratio: 17,
              msg_drop_number: 0,
              max_loop_time_ms: 1,
              max_retry: 0,
            },
          },
          {
            ID: 5,
            type: 10,
            access: 0,
            alias: 'pipe_2',
            firmware: null,
            statistics: null,
          },
          {
            ID: 6,
            type: 3,
            access: 0,
            alias: 'angle',
            firmware: null,
            statistics: null,
          },
          {
            ID: 7,
            type: 5,
            access: 0,
            alias: 'distance',
            firmware: null,
            statistics: null,
          },
        ],
        Cert: '❌',
        'Port Table': [2, 4],
        Services: 'inspector, pipe_2, angle, distance',
      },
      {
        ID: 4,
        certificate: false,
        portTable: [3, 65535],
        services: [
          {
            ID: 8,
            type: 11,
            access: 32,
            alias: 'motor_1',
            firmware: null,
            statistics: {
              rx_msg_stack_ratio: 5,
              luos_stack_ratio: 5,
              tx_msg_stack_ratio: 2,
              buffer_occupation_ratio: 24,
              msg_drop_number: 0,
              max_loop_time_ms: 1,
              max_retry: 0,
            },
          },
          {
            ID: 9,
            type: 11,
            access: 0,
            alias: 'motor_2',
            firmware: null,
            statistics: null,
          },
          {
            ID: 10,
            type: 11,
            access: 0,
            alias: 'motor_3',
            firmware: null,
            statistics: null,
          },
          {
            ID: 11,
            type: 12,
            access: 0,
            alias: 'servo_1',
            firmware: null,
            statistics: null,
          },
          {
            ID: 112,
            type: 12,
            access: 0,
            alias: 'servo_2',
            firmware: null,
            statistics: null,
          },
        ],
        Cert: '❌',
        'Port Table': [3, 65535],
        Services: 'motor_1, motor_2, motor_3, servo_1, servo_2',
      },
    ],
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [displayBox, setDisplayBox] = useState(false);
  const [showReplayBtn, setShowDisplayBtn] = useState(false);
  const [debugNode, setDebugNode] = useState<RTBNode | null>(null);
  const [debugError, setDebugError] = useState<RTBNode | null>(null);
  const [value, setValue] = useState('1');

  const handleChange = (_event: SyntheticEvent<Element, Event>, newValue: string) => {
    setValue(newValue);
  };

  // const ChartComponent = dynamic(() => import('./chart'), { ssr: false, suspense: true });

  useEffect(() => {
    // async function fetchFirmware() {
    //   const ports = sdk.getPorts();
    //   return await Promise.allSettled(
    //     routingTable.nodes.map(
    //       async (node) =>
    //         await Promise.allSettled(
    //           node.services.map(async (s) => {
    //             try {
    //               let firmware = null;
    //               let retries = 5;
    //               do {
    //                 firmware = await sdk.getServiceFirmware(s.ID, ports[0], { debug: DEBUG });
    //               } while (firmware === null && retries-- > 0);
    //             } catch (e) {
    //               cLog.error('Error while fetching firmware', (e as Error).message);
    //               return Promise.reject(e);
    //             }
    //           }),
    //         ),
    //     ),
    //   );
    // }

    async function fetchServiceStatistics() {
      const ports = sdk.getPorts();
      return await Promise.allSettled(
        routingTable.nodes.map(
          async (node) =>
            await Promise.allSettled(
              node.services.map(async (s) => {
                if (
                  s.type === ServiceType.PIPE_TYPE &&
                  node.services[0].type === ServiceType.INSPECTOR_TYPE
                ) {
                  return Promise.resolve(null);
                }
                let stats: ServiceStatistics | null = null;
                let retries = 5;
                do {
                  try {
                    const { statistics } = await sdk.getServiceStatistics(s.ID, ports[0], {
                      debug: NEXT_PUBLIC_DEBUG,
                    });
                    stats = statistics;
                  } catch (e) {
                    cLog.error('Error while fetching service statistics', (e as Error).message);
                    //return Promise.reject(e);
                    stats = null;
                  }
                } while (stats === null && retries-- > 0);

                if (stats !== null) {
                  setDebugNode(node);
                  s['statistics'] = stats;
                  return Promise.resolve(stats);
                }
                setDebugError(node);
                return Promise.reject(new Error(`No statistics for the service '${s.ID}'`));
              }),
            ),
        ),
      ).then(() => {
        setDisplayBox(true);
        setIsLoaded(false);
      });
    }

    if (routingTable.nodes.length > 0) {
      // fetchFirmware();
      fetchServiceStatistics();
    }
  }, [sdk, routingTable, routingTable.nodes]);

  return (
    <div className={styles.network}>
      <Box sx={{ height: '100%' }}>
        {displayBox ? (
          ''
        ) : (
          <>
            {isLoaded ? (
              <div>
                <CircularProgress className={styles.detectionBtn} />
                {debugNode?.ID ? (
                  <Alert severity="info">
                    Reading data from node {debugNode.ID} ({debugNode.services[0].alias}){' '}
                  </Alert>
                ) : (
                  ''
                )}
                {debugError?.ID ? (
                  <div>
                    {' '}
                    <Alert severity="error">
                      Error when fetching data from node {debugError.ID}(
                      {debugError.services[0].alias})
                    </Alert>{' '}
                    <Button
                      variant="outlined"
                      className={styles.errorDetectionBtn}
                      onClick={async () => {
                        setIsLoaded(true);
                        await sdk.init();
                        const ports = await sdk.getPorts();
                        const rtbData = await sdk.getRoutingTable(ports[0], { debug: true });
                        setRoutingTable(rtbData[0]);
                      }}
                    >
                      Relaunch detection
                    </Button>{' '}
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <div>
                <h1 className={styles.pageTitle}>Network display</h1>
                <Alert severity="info" style={{ margin: '30px auto', width: '50%' }}>
                  This browser application demonstrate how Luos natively allow direct access and
                  control of any hardware specific product. With this tool, you will find your
                  system represented by nodes and services, click on it and try it! Any advice is
                  good to know.{' '}
                  <a href="https://github.com/Luos-io/Luos/issues/new?assignees=nicolas-rabault&labels=feature&template=feature-request.md&title=%5BNEW+FEATURE%5D+">
                    💡 You can ask for new feature here. 💡
                  </a>
                </Alert>
                <div>
                  {' '}
                  <Grid container spacing={3} sx={{ marginBottom: '50px' }}>
                    <Grid item md={3}></Grid>
                    <Grid item md={3} display="flex" alignItems="center" justifyContent="flex-end">
                      <Button
                        variant="contained"
                        className={styles.detectionBtn}
                        onClick={async () => {
                          setShowDisplayBtn(true);
                          setIsLoaded(true);
                          await sdk.init();
                          const ports = await sdk.getPorts();
                          const rtbData = await sdk.getRoutingTable(ports[0], { debug: true });
                          setRoutingTable(rtbData[0]);
                        }}
                      >
                        Launch detection
                      </Button>
                    </Grid>
                    <Grid item md={3}>
                      <Button
                        variant="contained"
                        className={styles.fakeDetectionBtn}
                        onClick={async () => {
                          setIsLoaded(true);

                          setRoutingTable(fakert);
                        }}
                      >
                        Simulate a network
                      </Button>
                    </Grid>
                    <Grid item md={3}></Grid>
                  </Grid>
                </div>
                <Grid container>
                  <Grid item md={3}></Grid>
                  <Grid item md={6}>
                    <Paper elevation={3} className={styles.requirements}>
                      <h2 className={styles.title}>Requirements</h2>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <TabList onChange={handleChange}>
                            <Tab label="Luos env" value="1" />
                            <Tab label="Browser" value="2" />
                            <Tab label="OS" value="3" />
                          </TabList>
                        </Box>
                        <TabPanel className={styles.panel} value="1">
                          <a
                            target="blank"
                            href="https://docs.luos.io/tutorials/your-first-detection/"
                          >
                            Follow tutorial about detection
                          </a>
                        </TabPanel>
                        <TabPanel className={styles.panel} value="1">
                          <a
                            target="blank"
                            href="https://docs.luos.io/tutorials/get-started/get-started4"
                          >
                            Follow tutorial about inspector
                          </a>
                        </TabPanel>
                        <TabPanel className={styles.panel} value="2">
                          Google Chrome ≥ v89
                        </TabPanel>
                        <TabPanel className={styles.panel} value="2">
                          Microsoft Edge ≥ v89
                        </TabPanel>
                        <TabPanel className={styles.panel} value="2">
                          Opera ≥ v75
                        </TabPanel>
                        <TabPanel className={styles.panel} value="3">
                          MacOS
                        </TabPanel>
                        <TabPanel className={styles.panel} value="3">
                          Windows
                        </TabPanel>
                        <TabPanel className={styles.panel} value="3">
                          Linux
                        </TabPanel>
                      </TabContext>
                    </Paper>
                  </Grid>
                  <Grid item md={3}></Grid>
                </Grid>
              </div>
            )}
          </>
        )}

        {displayBox ? (
          <div>
            {showReplayBtn ? (
              <Button
                variant="outlined"
                className={styles.reloadDetectionBtn}
                onClick={async () => {
                  setDebugNode(null);
                  setDebugError(null);
                  setDisplayBox(false);
                  setIsLoaded(true);
                  await sdk.init();
                  const ports = await sdk.getPorts();
                  const rtbData = await sdk.getRoutingTable(ports[0], { debug: true });
                  setRoutingTable(rtbData[0]);
                }}
              >
                <ReplayIcon />
              </Button>
            ) : null}
            <Chart {...routingTable} />
          </div>
        ) : (
          ''
        )}
      </Box>
    </div>
  );
};
export default Network;
