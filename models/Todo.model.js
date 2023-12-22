const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    taskDays: {
        type: String,
        enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        required: true,
    },
    taskTime: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;