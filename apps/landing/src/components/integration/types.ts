export enum IntegrationTypeKey {
  MCU = 'mcu',
  OS = 'os',
  API = 'api',
  SDK = 'sdk',
}

export type Integration = {
  name: string;
  label: string;
  link: string;
};

export type IntegrationType = {
  key: IntegrationTypeKey;
  label: string;
  integrations: Integration[];
};
export type IntegrationTypeList = IntegrationType[];
