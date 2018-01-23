'use strict';

const Joi = require('joi');


const validateId = function (id) {

    const number = parseInt(id);
    const isNumber = Number.isInteger(number) && id.indexOf('.') === -1;
    return Promise.resolve(isNumber);
};

const validateTodo = async function (data) {

    const schema = {
        text: Joi.string().max(500).required()
    };

    return await Joi.validate(data, schema);
};

module.exports = {
    id: validateId,
    todo: validateTodo
};
