const express = require('express');
const {
    getAllTask,
    updateTask,
    deleteTask,
    addTask,
} = require('../controllers/Todo.controller');


const todoRouter = express.Router()

todoRouter.post('/todo/add', addTask);
todoRouter.get('/todo/tasks', getAllTask);
todoRouter.put('/todo/:id', updateTask);
todoRouter.delete('/todo/:id', deleteTask);


module.exports = todoRouter;