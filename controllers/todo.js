const { TopologyDescription } = require('mongoose/node_modules/mongodb')
const Task = require('../models/todo')

exports.getAllTasks = (req, res) => {
  Task.find()
    .then(task => res.json(task))
    .catch(err =>
      res.status(404).json({ message: 'Task not found', error: err.message })
    )
}

exports.createTask = (req, res) => {
  Task.create(req.body)
    .then(data => res.json({ message: 'Task created', data }))
    .catch(err =>
      res
        .status(400)
        .json({ message: 'Failed to create task', error: err.message })
    )
}

exports.putUpdateTask = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json({ message: 'updated successfully', data }))
    .catch(err =>
      res
        .status(400)
        .json({ message: 'Failed to update task', error: err.message })
    )
}
