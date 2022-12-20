export enum BenefitsTypeKey {
  TOPOLOGY = 'topology',
  MICROSERVICE = 'microservice',
  REMOTE = 'remote',
  BOOTLOADER = 'bootloader',
  TIMESTAMP = 'timestamp',
  MONITORING = 'monitoring',
}

export type Benefits = {
  name: string;
  label: string;
  link: string;
};

export type BenefitsType = {
  key: BenefitsTypeKey;
  label: string;
};
export type BenefitsTypeList = BenefitsType[];
