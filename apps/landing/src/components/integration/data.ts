import { IntegrationTypeList, IntegrationTypeKey } from './types';

export const integrationData: IntegrationTypeList = [
  {
    key: IntegrationTypeKey.MCU,
    label: 'MCU & IDE',
    integrations: [
      {
        name: 'esp',
        label: 'ESP32',
        link: 'https://www.luos.io/tutorials/esp',
        available: true,
      },
      {
        name: 'stm',
        label: 'STM32',
        link: 'https://www.luos.io/documentation/compatibility/mcu_demoboard#st',
        available: true,
      },
      {
        name: 'microship',
        label: 'Microchip',
        link: 'https://www.luos.io/documentation/compatibility/mcu_demoboard',
        available: true,
      },
      {
        name: 'raspberry',
        label: 'Raspberry Pi',
        link: '',
        available: true,
      },
      {
        name: 'arduino',
        label: 'Arduino',
        link: 'https://www.luos.io/tutorials/arduino/intro',
        available: true,
      },
      {
        name: 'pio',
        label: 'Platform IO',
        link: 'https://www.luos.io/tutorials/get-started/get-started1#2-set-up-your-development-environment',
        available: true,
      },
      {
        name: 'eclipse',
        label: 'Eclipse',
        link: 'https://www.luos.io/documentation/luos-technology/basics/organization#luos-engines-levels',
        available: true,
      },
      {
        name: 'vscodeico',
        label: 'VS Code',
        link: 'https://www.luos.io/documentation/luos-technology/basics/organization#luos-engines-levels',
        available: true,
      },
    ],
  },
  {
    key: IntegrationTypeKey.OS,
    label: 'OS & framework',
    integrations: [
      {
        name: 'ros',
        label: 'ROS-1 & ROS-2',
        link: 'https://www.luos.io/documentation/integrations/ros',
        available: true,
      },
      {
        name: 'freertos-white',
        label: 'FreeRTOS',
        link: 'https://www.luos.io/tutorials/freertos/intro',
        available: true,
      },
      {
        name: 'microros',
        label: 'Micro-ROS',
        link: '',
        available: false,
      },
    ],
  },
  {
    key: IntegrationTypeKey.API,
    label: 'API & integrations',
    integrations: [
      {
        name: 'simplefoc',
        label: 'SimpleFOC',
        link: '',
        available: true,
      },
      {
        name: 'zapier',
        label: 'Zapier',
        link: '',
        available: false,
      },
      {
        name: 'ifttt',
        label: 'IFTTT',
        link: '',
        available: false,
      },
      {
        name: 'freedom',
        label: 'Freedom Robotics',
        link: '',
        available: false,
      },
    ],
  },
  {
    key: IntegrationTypeKey.SDK,
    label: 'SDK & languages',
    integrations: [
      {
        name: 'c',
        label: 'C/C++',
        link: '',
        available: true,
      },
      {
        name: 'python',
        label: 'Python',
        link: 'https://www.luos.io/documentation/integrations/pyluos#required-installing-python-and-pip',
        available: true,
      },
      {
        name: 'js',
        label: 'Javascript',
        link: '',
        available: true,
      },
      {
        name: 'ts',
        label: 'Typescript',
        link: '',
        available: true,
      },
    ],
  },
];
export default integrationData;
