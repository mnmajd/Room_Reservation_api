const Room = require('../models/room.model')
const Client = require('../models/client.model')
const mailService = require('../services/mail.service')
const responseHandler = require('../handlers/response.handler')

exports.addRoom = async (req, res, next) => {
  try {
    const roomToAdd = ({ number, area, price, Apartment } = req.body)
    const room = await Room.create(roomToAdd)
    return responseHandler.resHandler(true, room, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.getRooms = async (req, res, next) => {
  try {
    const result = await Room.find().populate('Apartment')
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.getRoomById = async (req, res, next) => {
  try {
    const result = await Room.findOne({ _id: req.params.id }).populate('Apartment').populate('reserved_By')
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.getRoomsbyApartment = async (req, res, next) => {
  try {
    const result = await Room.findOne({ Apartment: req.params.ida })
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = ({ name, street, zipCode, city } = req.body)

    const result = await Room.findOneAndUpdate(
      { _id: req.params.id },
      updatedRoom,
      { new: true }
    )

    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.deleteRoom = async (req, res, next) => {
  try {
    const result = await Room.findOneAndDelete({ _id: req.params.id })

    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.bookRoom = async (req, res, next) => {
  try {
    const updatedRoom = {
      reserved_By: req.params.idc
    }

    const result = await Room.findOne({ _id: req.params.idr })

    if (result && !result.reserved_By) {
      console.log('not booked')
      const result = await Room.findOneAndUpdate(
        { _id: req.params.idr },
        updatedRoom,
        { new: true }
      )

      const client = await Client.findById(req.params.idc)
      mailService.confirmBooking(client.email)
      return responseHandler.resHandler(true, result, null, res, 200)
    } else {
      console.log('booked')
      return responseHandler.resHandler(false, {}, 'This Room is already booked', res, 400)
    }
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}
