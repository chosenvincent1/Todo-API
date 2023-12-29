const express = require('express');
const {
    getAllTask,
    getTaskByDays,
    getTaskTime,
    updateTask,
    deleteTask,
    addTask,
} = require('../controllers/Todo.controller');


const todoRouter = express.Router()

todoRouter.post('/', addTask);
todoRouter.get('/', getAllTask);
todoRouter.get('/:day', getTaskByDays);
todoRouter.get('/time/:time', getTaskTime);
todoRouter.put('/:id', updateTask);
todoRouter.delete('/:id', deleteTask);


module.exports = todoRouter;