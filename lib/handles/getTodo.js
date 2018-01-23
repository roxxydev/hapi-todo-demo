'use strict';

const Boom = require('boom');
const StoreModelNames = require('../datastore/storeModelNames');


exports.run = async function (request) {

    const server = request.server;
    const knexPromise = server.app.knex;
    const spiels = server.app.spiels.server;
    const validatorId = server.methods.validateId;
    const pathParams = request.params;

    return await validatorId(pathParams.id)
        .then((idValid) => {

            if (idValid) {
                return knexPromise;
            }

            return Promise.reject(Boom.badRequest(spiels.todoIdInvalid));
        })
        .then((knex) => {

            return Promise.resolve(knex(StoreModelNames.todo).where('id', pathParams.id));
        })
        .then((rows) => {

            if (rows.length > 0) {
                return Promise.resolve(rows[0]);
            }

            return Promise.reject(Boom.badRequest(spiels.todoIdDoesNotExists));
        })
        .catch((e) => {

            if (!e.isBoom) {
                throw new Error(spiels.unexpectedError);
            }

            return e;
        });
};
