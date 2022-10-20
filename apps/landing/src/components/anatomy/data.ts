import { AnatomyTypeList, AnatomyTypeKey } from './types';

export const anatomyData: AnatomyTypeList = [
  {
    key: AnatomyTypeKey.TOPOLOGY,
    label: 'Topology',
  },
  {
    key: AnatomyTypeKey.MICROSERVICE,
    label: 'Microservices',
  },
  {
    key: AnatomyTypeKey.REMOTE,
    label: 'Remote control',
  },
  {
    key: AnatomyTypeKey.BOOTLOADER,
    label: 'Bootloader',
  },
  {
    key: AnatomyTypeKey.TIMESTAMP,
    label: 'Timestamp',
  },
  {
    key: AnatomyTypeKey.MONITORING,
    label: 'Monitoring',
  },
];
export default anatomyData;
