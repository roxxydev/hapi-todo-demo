'use strict';

const Boom = require('boom');
const StoreModelNames = require('../datastore/storeModelNames');


exports.run = async function (request, h) {

    const server = request.server;
    const knexPromise = server.app.knex;
    const spiels = server.app.spiels.server;
    const validatorTodo = server.methods.validateTodo;
    const constructBoomOk = server.methods.constructBoomOkResponse;
    const payload = request.payload;

    return await validatorTodo(payload)
        .then(() => {

            return knexPromise;
        })
        .then((knex) => {

            return Promise.resolve(knex(StoreModelNames.todo).insert(payload));
        })
        .then(() => {

            const statusCode = 201;
            const response = constructBoomOk(statusCode, spiels.todoCreated);
            return h.response(response).code(statusCode);
        })
        .catch((e) => {

            if (e.isJoi) {
                return Boom.badRequest(e);
            }

            throw new Error(spiels.unexpectedError);
        });
};
