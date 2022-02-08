//const { TopologyDescription } = require("mongoose/node_modules/mongodb");
const Task = require("../models/user");

exports.getAllUsers = (req, res) => {
  Task.find()
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ message: "User not found", error: err.message })
    );
};
