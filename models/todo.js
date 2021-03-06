const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const Task = mongoose.model('task', TaskSchema)

module.exports = Task
