module.exports = {
  documentation: [
    {
      type: 'category',
      label: 'Luos technology',
      link: {
        type: 'doc',
        id: 'luos-technology/index',
      },
      items: [
        {
          type: 'category',
          label: 'Basics',
          link: {
            type: 'doc',
            id: 'luos-technology/basics/index',
          },
          items: [
            {
              type: 'doc',
              label: 'Concept',
              id: 'luos-technology/basics/concept',
            },
            {
              type: 'doc',
              label: 'Code organization',
              id: 'luos-technology/basics/orga',
            },
          ],
        },
        {
          type: 'category',
          label: 'Node',
          link: {
            type: 'doc',
            id: 'luos-technology/node/node',
          },
          items: [
            {
              type: 'doc',
              label: 'Luos engine',
              id: 'luos-technology/node/luos',
            },
            {
              type: 'doc',
              label: 'Hardware abstraction layer',
              id: 'luos-technology/node/luos-hal',
            },
            {
              type: 'doc',
              label: 'Network topology',
              id: 'luos-technology/node/topology',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Package',
          id: 'luos-technology/package/index',
        },
        {
          type: 'category',
          label: 'Services',
          link: {
            type: 'doc',
            id: 'luos-technology/services/index',
          },
          items: [
            {
              type: 'doc',
              label: 'Initialization',
              id: 'luos-technology/services/service-api',
            },
            {
              type: 'doc',
              label: 'Types',
              id: 'luos-technology/services/service-type',
            },
            {
              type: 'doc',
              label: 'Profiles',
              id: 'luos-technology/services/profile',
            },
            {
              type: 'doc',
              label: 'Routing table',
              id: 'luos-technology/services/routing-table',
            },
            {
              type: 'doc',
              label: 'Timestamp',
              id: 'luos-technology/services/timestamp',
            },
          ],
        },
        {
          type: 'category',
          label: 'Message',
          link: {
            type: 'doc',
            id: 'luos-technology/message/message',
          },
          items: [
            {
              type: 'doc',
              label: 'Send message',
              id: 'luos-technology/message/basic-message',
            },
            {
              type: 'doc',
              label: 'Receive message',
              id: 'luos-technology/message/handling-message',
            },
            {
              type: 'doc',
              label: 'Commands',
              id: 'luos-technology/message/command',
            },
            {
              type: 'doc',
              label: 'Object dictionnary',
              id: 'luos-technology/message/object-dictionary',
            },
            {
              type: 'doc',
              label: 'Advanced message',
              id: 'luos-technology/message/advanced-message',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Hardware consideration',
      link: {
        type: 'doc',
        id: 'hardware-consideration/index',
      },
      items: [
        {
          type: 'doc',
          label: 'Minimum requirement',
          id: 'hardware-consideration/minimum-requirement',
        },
        {
          type: 'doc',
          label: 'Luos engine configuration',
          id: 'hardware-consideration/mcu',
        },
        {
          type: 'doc',
          label: 'Electronic design',
          id: 'hardware-consideration/electronics',
        },
        {
          type: 'doc',
          label: 'Test your Robus configuration',
          id: 'hardware-consideration/test-your-configuration',
        },
      ],
    },
    {
      type: 'category',
      label: 'Built-in tools',
      link: {
        type: 'doc',
        id: 'tools/index',
      },
      items: [
        {
          type: 'doc',
          label: 'Gate',
          id: 'tools/gate',
        },
        {
          type: 'doc',
          label: 'JSON API',
          id: 'api/api-json',
        },
        {
          type: 'doc',
          label: 'Bootloader',
          id: 'tools/boot',
        },
        {
          type: 'doc',
          label: 'Inspector',
          id: 'tools/inspector',
        },
        {
          type: 'doc',
          label: 'Monitoring',
          id: 'tools/monitoring',
        },
        {
          type: 'link',
          label: 'Network display',
          href: 'https://app.luos.io/network',
        },
      ],
    },
    {
      type: 'category',
      label: 'Software Integrations',
      link: {
        type: 'doc',
        id: 'api/index',
      },
      items: [
        {
          type: 'doc',
          label: 'SDK python: Pyluos',
          id: 'tools/pyluos',
        },
        {
          type: 'link',
          label: 'SDK typescript',
          href: 'https://github.com/Luos-io/sdk-ts',
        },
        {
          type: 'link',
          label: 'PlateformIO',
          href: 'https://www.luos.io/tutorials/pio',
        },
        {
          type: 'link',
          label: 'Arduino IDE',
          href: 'https://www.luos.io/tutorials/arduino',
        },
        {
          type: 'link',
          label: 'Espressif IDE',
          href: 'https://www.luos.io/tutorials/esp',
        },
        {
          type: 'link',
          label: 'RTOS',
          href: 'https://www.luos.io/tutorials/freertos',
        },
        {
          type: 'doc',
          label: 'ROS',
          id: 'tools/ros',
        },
      ],
    },
    {
      type: 'category',
      label: 'Compatibility',
      items: [
        {
          type: 'doc',
          label: 'Luos ecosystem',
          id: 'compatibility/ecosystem',
        },
        {
          type: 'doc',
          label: 'Boards compatibility',
          id: 'compatibility/mcu_demoboard',
        },
      ],
    },
  ],
};
