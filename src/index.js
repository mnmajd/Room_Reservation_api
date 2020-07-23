const express = require('express')

const connectDB = require('./utils/connectDB.util')

// ___ Init ___ //
const app = express()

// ___ Connect To DB ___ //
connectDB()

// ___ Routes ___ //
const apartmentRouter = require('./routes/apartment.route')
const roomRouter = require('./routes/room.route')
const clientRouter = require('./routes/client.route')

// ___ Middlewares ___ //
app.use(express.json())

// ___ EntryPoints ___ //
app.use('/api/v1/apartment', apartmentRouter)
app.use('/api/v1/room', roomRouter)
app.use('/api/v1/client', clientRouter)


module.exports = app
