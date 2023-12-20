const express = require('express');
const {
    addTodo,
    getAllTask,
    updateTask,
} = require('../controllers/Todo.controller');


const todoRouter = express.Router()

todoRouter.post('/todo/add', addTodo);
todoRouter.get('/todo/tasks', getAllTask);
todoRouter.put('/todo/edit/:id', updateTask);


module.exports = todoRouter;