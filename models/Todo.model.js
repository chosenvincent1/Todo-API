const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    taskDays: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    taskTime: {
        type: String,
    },
}, { timestamps: true })

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;