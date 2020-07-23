const Apartment = require('../models/apartment.model')
const responseHandler = require('../handlers/response.handler')

exports.addApartment = async (req, res, next) => {
  try {
    const apartment = ({ name, street, zipCode, city } = req.body)
    const result = await Apartment.create(apartment)
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.getApartments = async (req, res, next) => {
  try {
    const result = await Apartment.find()
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.getApartmentById = async (req, res, next) => {
  try {
    const result = await Apartment.findOne({ _id: req.params.id })
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.updateApartment = async (req, res, next) => {
  try {
    const updatedApartment = ({ name, street, zipCode, city } = req.body)
    const result = await Apartment.findOneAndUpdate(
      { _id: req.params.id },
      updatedApartment,
      { new: true }
    )
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.deleteApartment = async (req, res, next) => {
  try {
    const result = await Apartment.findOneAndDelete({ _id: req.params.id })
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}
