const express = require('express');
const {
    getAllTask,
    getTaskByDays,
    getTaskTime,
    getTaskByDayAndTime,
    updateTask,
    deleteTask,
    addTask,
} = require('../controllers/Todo.controller');


const todoRouter = express.Router()

todoRouter.post('/', addTask);
todoRouter.get('/', getAllTask);
todoRouter.get('/:day', getTaskByDays);
todoRouter.get('/time/:time', getTaskTime);
todoRouter.get('/task/:day/:time', getTaskByDayAndTime);
todoRouter.put('/:id', updateTask);
todoRouter.delete('/:id', deleteTask);


module.exports = todoRouter;