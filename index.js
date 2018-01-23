'use strict';

const Server = require('./lib/server');

async function initServer() {
    const props = await Server;
    const server = props[props.length - 1];
    return Promise.resolve(server);
}

async function startServer(server) {
    await server.start();
    server.log(['log'], `Server started at ${server.info.uri}`);
    return Promise.resolve(server);
}

initServer()
    .then((server) => {
        return startServer(server);
    })
    .catch((e) => {
        console.log(`Error starting server. \n${e}`);
    });
