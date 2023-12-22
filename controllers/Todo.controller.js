const mongoose = require('mongoose');
const Todo = require('../models/Todo.model');

async function addTask(req, res){
    const { task, taskDays, taskTime } = req.body;
    try {
        if(!task.trim().length > 0) {
            return res.status(400).json({msg: 'This field must not be empty'})
        }

        const newTask = new Todo({
            task,
            taskDays,
            taskTime,
        });

        await newTask.save();
        
        res.status(200).json({msg: 'Task Added Successfully', newTask});
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Error Creating New Task'})
    }
}

async function getAllTask(req, res) {
    try {
        const tasks = await Todo.find();
        res.status(200).json(tasks)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Can't fetch tasks"});
    }
}

async function updateTask(req, res){
    const { id } = req.params;
    const { newTask } = req.body
    try {
        let taskToUpdate = await Todo.findOne({_id: id});

        if(!taskToUpdate){
            return res.status(400).json({msg: 'Task not found'});
        }

        taskToUpdate.task = newTask || taskToUpdate.task;

        await taskToUpdate.save();

        res.status(200).json({msg: 'Task updated successfully', taskToUpdate});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Can't update task"});
    }
}

async function deleteTask(req, res){
    const { id } = req.params;
    try {
        const validId = mongoose.Types.ObjectId.isValid(id)

        if(!validId) {
            return res.status(400).json({msg: 'Invalid Id'})
        }

        const removedTask = await Todo.findByIdAndDelete(id)

        if(!removedTask) {
            return res.status(404).json({msg: 'Task not found'})
        }

        const newTaskList = await Todo.find();

        res.status(200).json({mgs: 'Task deleted successfully', newTaskList});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'An error occured '});
    }
}


module.exports = {
    addTask,
    getAllTask,
    updateTask,
    deleteTask,
}