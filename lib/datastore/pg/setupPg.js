'use strict';

const StoreModelNames = require('../storeModelNames');


exports.init = async function (connOpts) {

    const knex = require('knex')({
        client: 'pg',
        connection: connOpts
    });

    const knexPromise = await knex.schema.createTableIfNotExists(StoreModelNames.todo, (table) => {

        table.increments();
        table.string('text');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).then(() => {

        return Promise.resolve(knex);
    });

    return knexPromise;
};
