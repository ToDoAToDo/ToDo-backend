//const { TopologyDescription } = require("mongoose/node_modules/mongodb");
const User = require('../models/user')

exports.createUser = (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err =>
      res
        .status(400)
        .json({ message: 'Could not create user', error: err.message })
    )
}

exports.getAllUsers = (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ message: 'User not found', error: err.message })
    )
}
