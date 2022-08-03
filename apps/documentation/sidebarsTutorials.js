module.exports = {
  documentation: [
    {
      type: 'category',
      label: 'Trainings',
      link: { type: 'doc', id: 'index' },
      items: [
        {
          type: 'category',
          label: 'Get started',
          link: { type: 'doc', id: 'get-started/get-started' },
          items: [
            {
              type: 'doc',
              label: 'Your first project',
              id: 'get-started/get-started1',
            },
            {
              type: 'doc',
              label: 'Take the control',
              id: 'get-started/get-started2',
            },
            {
              type: 'doc',
              label: 'Unleash your code',
              id: 'get-started/get-started3',
            },
            {
              type: 'doc',
              label: 'Display your network',
              id: 'get-started/get-started4',
            },
          ],
        },
        {
          type: 'category',
          label: 'First service',
          link: { type: 'doc', id: 'your-first-service/your-first-service' },
          items: [
            {
              type: 'doc',
              label: 'Create a service',
              id: 'your-first-service/luos-service',
            },
            {
              type: 'doc',
              label: 'Create a package',
              id: 'your-first-service/create-a-package',
            },
          ],
        },
        {
          type: 'category',
          label: 'First message',
          link: { type: 'doc', id: 'your-first-message/your-first-message' },
          items: [
            {
              type: 'doc',
              label: 'Receive a message',
              id: 'your-first-message/receiving-message',
            },
            {
              type: 'doc',
              label: 'Send a message',
              id: 'your-first-message/send-message',
            },
          ],
        },
        {
          type: 'category',
          label: 'First detection',
          link: { type: 'doc', id: 'your-first-detection/your-first-detection' },
          items: [
            {
              type: 'doc',
              label: 'The topology',
              id: 'your-first-detection/topology',
            },
            {
              type: 'doc',
              label: 'The routing table',
              id: 'your-first-detection/routing-table',
            },
            {
              type: 'doc',
              label: 'Full application',
              id: 'your-first-detection/embedded-app',
            },
          ],
        },
        {
          type: 'category',
          label: 'Aliases',
          link: { type: 'doc', id: 'resilient-alias/intro' },
          items: [
            {
              type: 'doc',
              label: 'Resilient aliases management',
              id: 'resilient-alias/resilient-alias',
            },
          ],
        },
        {
          type: 'category',
          label: 'Bootloader',
          link: { type: 'doc', id: 'bootloader/intro' },
          items: [
            {
              type: 'doc',
              label: 'Set and use a bootloader',
              id: 'bootloader/bootloader',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: { type: 'doc', id: 'index' },
      items: [
        {
          type: 'doc',
          label: 'PlatformIO',
          id: 'pio/pio',
        },
        {
          type: 'doc',
          label: 'Arduino IDE',
          id: 'arduino/intro',
        },
        {
          type: 'doc',
          label: 'Espressif IDE',
          id: 'esp/esp',
        },
        {
          type: 'doc',
          label: 'RTOS',
          id: 'freertos/intro',
        },
        {
          type: 'category',
          label: 'ROS 1&2',
          link: {
            type: 'doc',
            id: 'luos-integration/list',
          },
          items: [
            {
              type: 'doc',
              label: 'Install ROS 2',
              id: 'luos-integration/install-ros2',
            },
            {
              type: 'doc',
              label: 'ROS 2 package example',
              id: 'luos-integration/ros2-package-example',
            },
            {
              type: 'doc',
              label: 'ROS 1 retro-compatibility with Luos',
              id: 'luos-integration/ros1-retrocompatibility',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Use cases',
      link: { type: 'doc', id: 'index' },
      items: [
        {
          type: 'doc',
          label: 'Morse encoder',
          id: 'morse/morse',
        },
        {
          type: 'doc',
          label: 'Connected bike alarm',
          id: 'bike-alarm/bike-alarm',
        },
      ],
    }
  ],
};
