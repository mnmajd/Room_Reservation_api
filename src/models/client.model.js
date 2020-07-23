const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const ClientModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
})

ClientModel.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

ClientModel.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

module.exports = mongoose.model('Client', ClientModel)
