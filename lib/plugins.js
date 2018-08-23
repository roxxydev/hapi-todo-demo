'use strict';

const Good = require('good');


const plugins = [
    {
        plugin: Good,
        options: {
            reporters: {
                console: [{
                    name: 'Squeeze',
                    module: 'good-squeeze',
                    args: [{ log: '*', error: '*', response: '*' }]
                }, {
                    module: 'good-console',
                    args: [{ utc: false }]
                }, 'stdout']
            }
        }
    }
];


exports.plugins = plugins;
