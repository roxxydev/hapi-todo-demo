'use strict';

const Boom = require('boom');


exports.run = async function (request) {

    const server = request.server;
    const spiels = server.app.spiels.server;

    return await Promise.reject(Boom.notFound(spiels.apiNonExistent));
};
