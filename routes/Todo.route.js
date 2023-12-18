const express = require('express');
const {
    addTodo,
} = require('../controllers/Todo.controller')

const todoRouter = express.Router()

todoRouter.post('/todo/add', addTodo);


module.exports = todoRouter;