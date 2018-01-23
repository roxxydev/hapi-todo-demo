'use strict';

const Boom = require('boom');
const StoreModelNames = require('../datastore/storeModelNames');


exports.run = async function (request, h) {

    const server = request.server;
    const knexPromise = server.app.knex;
    const spiels = server.app.spiels.server;
    const validatorTodo = server.methods.validateTodo;
    const validatorId = server.methods.validateId;
    const constructBoomOk = server.methods.constructBoomOkResponse;
    const pathParams = request.params;
    const payload = request.payload;

    return await validatorId(pathParams.id)
        .then((idValid) => {

            if (idValid) {
                return validatorTodo(payload);
            }

            return Promise.reject(Boom.badRequest(spiels.todoIdInvalid));
        })
        .then(() => {

            return knexPromise;
        })
        .then((knex) => {

            return Promise.resolve(
                knex(StoreModelNames.todo)
                    .where('id', pathParams.id)
                    .update(payload));
        })
        .then((totRowsUpdated) => {

            if (totRowsUpdated === 0) {
                return Promise.reject(Boom.badRequest(spiels.todoIdDoesNotExists));
            }

            const statusCode = 200;
            const response = constructBoomOk(statusCode, spiels.todoUpdated);
            return h.response(response).code(statusCode);
        })
        .catch((e) => {

            if (!e.isBoom) {
                throw new Error(spiels.unexpectedError);
            }

            return e;
        });
};
