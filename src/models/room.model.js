const mongoose = require('mongoose')

const RoomModel = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  area: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  Apartment: {
    type: mongoose.Schema.ObjectId,
    required: true,
    index: true,
    ref: 'Apartment'
  },
  reserved_By: {
    type: mongoose.Schema.ObjectId,
    required: false,
    index: true,
    ref: 'Client'
  }
})

module.exports = mongoose.model('Room', RoomModel)
