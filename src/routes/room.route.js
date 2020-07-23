const express = require('express')
const {verifyOrdinaryUser} = require ('../handlers/auth.handler')
const router = express.Router()
const {
  getRooms,
  addRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
  getRoomsbyApartment,
  bookRoom
} = require('../controllers/room.controller')

router
  .route('/')
  .get(getRooms)
  .post(addRoom)

router
  .route('/:id')
  .get(getRoomById)
  .put(updateRoom)
  .delete(deleteRoom)

router.get('/:ida', getRoomsbyApartment)
// ___ Client can't book room unless he is loged in :) ___ //

router.put('/book/:idr/:idc', verifyOrdinaryUser ,bookRoom)

module.exports = router
