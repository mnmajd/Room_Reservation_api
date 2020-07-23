const express = require('express')
const router = express.Router()
const {
  addApartment,
  getApartments,
  getApartmentById,
  updateApartment,
  deleteApartment
} = require('../controllers/apartment.controller')

router
  .route('/')
  .get(getApartments)
  .post(addApartment)

router
  .route('/:id')
  .get(getApartmentById)
  .put(updateApartment)
  .delete(deleteApartment)

module.exports = router
