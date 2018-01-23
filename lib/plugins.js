'use strict';

const plugins = [
    {
        plugin: {
            name: 'good',
            version: '7.1.x',
            register: (server, options) => {}
        },
        options: {
            reporters: {
                console: [
                    {
                        module: 'good-console',
                        args: [{ utc: false }]
                    },
                    'stdout'
                ]
            }
        }
    }
];


exports.plugins = plugins;
