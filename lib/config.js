'use strict';

const bool = function (val) {

    if (typeof val === 'boolean') {

        return val;
    }

    return (val.toLowerCase() === 'true');
};


exports.paths = {
    todos: '/todos',
    todosId: '/todos/{id}',
    nonExistent: '/{p*}'
};


exports.defaults = {
    host: String('localhost'),
    port: parseInt(process.env.PORT || 8088),
    sampleConfig: String(process.env.SAMPLE_CONFIG || 'This is a sample config value'),
    sampleConfigBoolean: bool(process.env.CRON_ENABLED || true)
};


exports.store = {
    name: 'pg',
    options: {
        host: '127.0.0.1',
        database: 'todo',
        user: 'postgres',
        password: 'postgres'
    }
};

exports.table = {
    todo: 'todo'
};


exports.spiels = {
    todoCreated: 'ToDo created.',
    todoUpdated: 'ToDo updated.',
    todoDeleted: 'ToDo deleted.',
    todoIdInvalid: 'id is invalid',
    todoIdDoesNotExists: 'id does not exists',
    unexpectedError: 'Oops! Something went wrong',
    apiNonExistent: 'Oops! That\'s not a valid request'
};


exports.config = {
};


exports.app = {
    setup: {
        paths: exports.paths
    },
    spiels: {
        server: exports.spiels
    },
    config: {
        server: exports.config
    },
    defaults: {
        server: exports.defaults
    }
};


exports.connection = {
    host: exports.defaults.host,
    port: exports.defaults.port
};

exports.log = {
    debug: {
        log: ['log', 'err', 'debug', 'info', 'warning']
    }
};
