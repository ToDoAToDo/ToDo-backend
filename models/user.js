const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema({
  name: {
    type: 'String',
    required: true,
    unique: true,
    index: true,
  },
})

UserSchema.plugin(uniqueValidator)

const User = mongoose.model('user', UserSchema)

module.exports = User
