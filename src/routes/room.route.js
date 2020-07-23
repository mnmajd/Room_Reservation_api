const express = require('express')
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
router.put('/book/:idr/:idc', bookRoom)

module.exports = router
