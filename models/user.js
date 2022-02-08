const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
