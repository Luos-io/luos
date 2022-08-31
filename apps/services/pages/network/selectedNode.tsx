import { useState } from 'react';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
//TODO : add add messages and loop time data

import type { Node } from 'pages/network/interfaces';

import styles from './chart.module.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const serviceType = [
  'void',
  'gate',
  'color',
  'angle',
  'state',
  'distance',
  'voltage',
  'imu',
  'light',
  'load',
  'pipe',
  'motor',
  'servo-motor',
  'inspector',
  'text',
  'unknown',
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface SelectedNodeProps {
  node: Node;
}
const SelectedNode = ({ node }: SelectedNodeProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      {node && Object.keys(node).length > 0 ? (
        <div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Node" {...a11yProps(0)} />
                <Tab label="Services (soon)" {...a11yProps(1)} disabled />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className={styles.titleContainer}>
                <p>
                  <span className={styles.titleImg}>
                    {' '}
                    <Image
                      src={`/assets/images/topology/${serviceType[node.services[0].type]}.svg`}
                      width="24"
                      height="24"
                      alt="service picto"
                    />{' '}
                  </span>{' '}
                  <span className={styles.titleText}>
                    {node.services[0] !== undefined ? node.services[0].alias : ''} (Nd {node.index})
                  </span>
                </p>
              </div>
              <div className={styles.nodePropertiesContainer}>
                <div className={styles.nodePropertiesTitle}>Properties</div>
                <p>
                  <span className={styles.status}>Max message space : </span>
                  <span className={styles.value}>{Math.round(node.value * 100)}%</span>
                </p>
                <p>
                  <span className={styles.status}>Number of service(s): </span>
                  <span className={styles.value}>{node.services.length}</span>
                </p>
                <p>
                  <span className={styles.status}>Luos stack : </span>
                  <span className={styles.value}>{Math.round(node.luos_value * 100)}%</span>
                </p>
                <p>
                  <span className={styles.status}>Rx stack : </span>
                  <span className={styles.value}>
                    {node?.services?.[0]?.statistics?.rx_msg_stack_ratio}%
                  </span>
                </p>
                <p>
                  <span className={styles.status}>Tx stack : </span>
                  <span className={styles.value}>
                    {node?.services?.[0]?.statistics?.tx_msg_stack_ratio}%
                  </span>
                </p>

                <p>
                  <span className={styles.status}>Loop time : </span>
                  <span className={styles.value}>
                    {node?.services?.[0]?.statistics?.max_loop_time_ms}ms
                  </span>
                </p>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className={styles.nodePropertiesContainer}>
                <h3 className={styles.nodePropertiesTitle}>Services</h3>
              </div>
            </TabPanel>
          </Box>
        </div>
      ) : null}
    </div>
  );
};

export default SelectedNode;
