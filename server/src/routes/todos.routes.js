const express = require('express');
const todosController = require('../controllers/todos.controller');
const todosRoutes = express.Router();

// Obtener todos los usuarios
todosRoutes.get('/', todosController.getAllTodos);
todosRoutes.post('/', todosController.createTodo);
todosRoutes.patch('/:id', todosController.updateTodo);
todosRoutes.delete('/:id', todosController.deleteTodo);

module.exports = todosRoutes;
