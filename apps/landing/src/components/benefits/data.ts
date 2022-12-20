import { BenefitsTypeList, BenefitsTypeKey } from './types';

export const benefitsData: BenefitsTypeList = [
  {
    key: BenefitsTypeKey.TOPOLOGY,
    label: 'Topology',
  },
  {
    key: BenefitsTypeKey.MICROSERVICE,
    label: 'Microservices',
  },
  {
    key: BenefitsTypeKey.REMOTE,
    label: 'Remote control',
  },
  {
    key: BenefitsTypeKey.BOOTLOADER,
    label: 'Bootloader',
  },
  {
    key: BenefitsTypeKey.TIMESTAMP,
    label: 'Timestamp',
  },
  {
    key: BenefitsTypeKey.MONITORING,
    label: 'Monitoring',
  },
];
export default benefitsData;
