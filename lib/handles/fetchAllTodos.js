'use strict';

const StoreModelNames = require('../datastore/storeModelNames');


exports.run = async function (request) {

    const server = request.server;
    const knexPromise = server.app.knex;
    const spiels = server.app.spiels.server;

    return await knexPromise
        .then((knex) => {

            return Promise.resolve(knex(StoreModelNames.todo).select());
        })
        .catch(() => {

            throw new Error(spiels.unexpectedError);
        });
};
