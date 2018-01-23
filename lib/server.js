'use strict';

const Hapi = require('hapi');
const Config = require('./config');
const Routes = require('./routes');
const Plugins = require('./plugins');
const Methods = require('./methods');
const Logging = require('./logging');
const Store = require('./datastore/store');

const options = Object.assign({}, Config.connection, Config.log);
const server = new Hapi.Server(options);

const store = {
    knex: Store.setupStore(Config.store.name, Config.store.options)
};

server.app = Object.assign(server.app, Config.app, store);
server.events.on('log', Logging.log);

server.bind({ server: server });

const ready = Promise.all([
    server.register(Plugins.plugins),
    server.method(Methods.load()),
    server.route(Routes.load),
    server
]);

module.exports = ready;
