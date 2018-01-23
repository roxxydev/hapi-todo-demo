'use strict';

const PgSetup = require('./pg/setupPg');

const setupStore = async function (client, options) {
    if (client === 'pg') {
        const knex = await PgSetup.init(options)
            .catch((e) => {
                return Promise.reject(e);
            });
        return knex;
    }

    return Promise.reject('Error data store not supported');
};

module.exports = {
    setupStore: setupStore
};
