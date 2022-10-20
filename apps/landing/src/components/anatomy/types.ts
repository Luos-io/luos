export enum AnatomyTypeKey {
  TOPOLOGY = 'topology',
  MICROSERVICE = 'microservice',
  REMOTE = 'remote',
  BOOTLOADER = 'bootloader',
  TIMESTAMP = 'timestamp',
  MONITORING = 'monitoring',
}

export type Anatomy = {
  name: string;
  label: string;
  link: string;
  available: boolean;
};

export type AnatomyType = {
  key: AnatomyTypeKey;
  label: string;
};
export type AnatomyTypeList = AnatomyType[];
