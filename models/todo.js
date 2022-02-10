const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: true,
  },
  status: {
    type: 'String',
    required: true,
    default: 'Unfinished',
  },
})

const Task = mongoose.model('task', TaskSchema)

module.exports = Task
