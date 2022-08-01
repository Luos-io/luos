module.exports = {
  documentation: [
    {
      type: 'category',
      label: 'Trainings',
      link: { type: 'doc', id: 'index' },
      items: [
        {
          type: 'doc',
          label: 'Get started',
          id: 'get-started/get-started',
        },
        {
          type: 'doc',
          label: 'First service',
          id: 'your-first-service/your-first-service',
        },
        {
          type: 'doc',
          label: 'First message',
          id: 'your-first-message/your-first-message',
        },
        {
          type: 'doc',
          label: 'First detection',
          id: 'your-first-detection/your-first-detection',
        },
        {
          type: 'doc',
          label: 'Aliases',
          id: 'resilient-alias/intro',
        },
        {
          type: 'doc',
          label: 'Bootloader',
          id: 'bootloader/intro',
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
