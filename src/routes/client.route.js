const express = require('express')
const router = express.Router()
const {
  register,
  login,
  getClients,
  getClientById,
  updateClient,
  deleteClient
} = require('../controllers/client.controller')

router
  .route('/:id')
  .get(getClientById)
  .put(updateClient)
  .delete(deleteClient)

router.get('/', getClients)
router.post('/singup', register)
router.post('/login', login)

module.exports = router
