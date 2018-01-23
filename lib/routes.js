'use strict';

const Config = require('./config');
const NonExistent = require('./handles/nonExistent');
const CreateTodo = require('./handles/createTodo');
const GetTodo = require('./handles/getTodo');
const FetchAllTodos = require('./handles/fetchAllTodos');
const UpdateTodos = require('./handles/updateTodo');
const DeleteTodos = require('./handles/deleteTodo');


exports.load = [
    { path: Config.paths.nonExistent, method: '*', handler: NonExistent.run },
    { path: Config.paths.todos, method: 'POST', handler: CreateTodo.run },
    { path: Config.paths.todos, method: 'GET', handler: FetchAllTodos.run },
    { path: Config.paths.todosId, method: 'GET', handler: GetTodo.run },
    { path: Config.paths.todosId, method: 'PUT', handler: UpdateTodos.run },
    { path: Config.paths.todosId, method: 'DELETE', handler: DeleteTodos.run }
];
