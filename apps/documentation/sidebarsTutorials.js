module.exports = {
    documentation: [
        {
            type: 'category',
            label: 'Tutorials',
            link: { type: 'doc', id: 'index' },
            items: [
                {
                    type: 'category',
                    label: 'Get_started',
                    link: { type: 'doc', id: 'getstarted' },
                    items: [
                        {
                            type: 'doc',
                            label: 'Set up your project',
                            id: 'get-started/get-started',
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
                    ],
                },
                {
                    type: 'category',
                    label: 'Trainings',
                    link: { type: 'doc', id: 'trainings' },
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: 'Your First service',
                            link: { type: 'doc', id: 'your-first-service/index' },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'First service',
                                    id: 'your-first-service/first-service',
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
                            label: 'Your First message',
                            link: { type: 'doc', id: 'your-first-message/index' },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Receive a message',
                                    id: 'your-first-message/first-message',
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
                            label: 'Your first detection',
                            link: { type: 'doc', id: 'your-first-detection/index' },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'First detection',
                                    id: 'your-first-detection/first-detection',
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
                            type: 'doc',
                            label: 'Bootloader',
                            id: 'bootloader/bootloader',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Integrations',
                    link: { type: 'doc', id: 'integrations' },
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: 'PlatformIO',
                            link: { type: 'doc', id: 'pio/pio' },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Include Luos',
                                    id: 'pio/include',
                                },
                            ],
                        },
                        {
                            type: 'doc',
                            label: 'Arduino IDE',
                            id: 'arduino/arduino',
                        },
                        {
                            type: 'category',
                            label: 'Espressif IDE',
                            link: { type: 'doc', id: 'esp/esp' },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Connect ESP to network',
                                    id: 'esp/connect',
                                },
                            ],
                        },
                        {
                            type: 'doc',
                            label: 'RTOS with Luos engine',
                            id: 'freertos/freertos',
                        },
                        {
                            type: 'category',
                            label: 'ROS 1&2',
                            link: {
                                type: 'doc',
                                id: 'luos-integration/install-ros2',
                            },
                            items: [
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
                    link: { type: 'doc', id: 'usecases' },
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: 'Morse encoder',
                            link: { type: 'doc', id: 'morse/morse' },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Display encoder output',
                                    id: 'morse/output',
                                },
                                {
                                    type: 'doc',
                                    label: 'Add an input service',
                                    id: 'morse/add-service',
                                },
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Connected bike alarm',
                            link: { type: 'doc', id: 'bike-alarm/bike-alarm' },
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Make this alarm modular',
                                    id: 'bike-alarm/adaptable-alarm',
                                },
                                {
                                    type: 'doc',
                                    label: 'Add a control app',
                                    id: 'bike-alarm/control-alarm',
                                },
                                {
                                    type: 'doc',
                                    label: 'Make the alarm evolve',
                                    id: 'bike-alarm/evolve-alarm',
                                },
                                {
                                    type: 'doc',
                                    label: 'Connect it to the Cloud',
                                    id: 'bike-alarm/cloud-alarm',
                                },
                            ],
                        },
                        {
                            type: 'doc',
                            label: 'How to have flexible and resilient aliases',
                            id: 'resilient-alias/resilient-alias',
                        },
                    ],
                },
            ],
        },
    ],
};
