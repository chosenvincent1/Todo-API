const Todo = require('../models/Todo.model');

async function addTodo(req, res){
    const { task } = req.body;
    try {
        if(!task.trim().length > 0) {
            return res.status(400).json({msg: 'This field must not be empty'})
        }

        const newTask = new Todo({
            task,
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


module.exports = {
    addTodo,
    getAllTask,
    updateTask,
}