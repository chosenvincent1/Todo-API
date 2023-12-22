const express = require('express');
const {
    getAllTask,
    getTaskByDays,
    updateTask,
    deleteTask,
    addTask,
} = require('../controllers/Todo.controller');


const todoRouter = express.Router()

todoRouter.post('/todos', addTask);
todoRouter.get('/todos', getAllTask);
todoRouter.get('/todos/:day', getTaskByDays)
todoRouter.put('/todos/:id', updateTask);
todoRouter.delete('/todos/:id', deleteTask);


module.exports = todoRouter;