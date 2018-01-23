'use strict';

const ValidateTodo = require('./validations/validateTodo');


const constructBoomOkResponse = (responsePayloadCode, responsePayloadMessage) => {

    const code = responsePayloadCode ? responsePayloadCode: 200;
    const msg = responsePayloadMessage ? responsePayloadMessage: '';

    const response = {
        statusCode: code,
        message: msg
    };

    return response;
};

exports.load = () => {

    const methods = [{
        name: 'constructBoomOkResponse',
        method: constructBoomOkResponse,
        options: {}
    },
    {
        name: 'validateTodo',
        method: ValidateTodo.todo,
        options: {}
    },
    {
        name: 'validateId',
        method: ValidateTodo.id,
        options: {}
    }];

    return methods;
};
