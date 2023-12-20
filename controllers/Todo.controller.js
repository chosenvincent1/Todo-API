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


module.exports = {
    addTodo,
}