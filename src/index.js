const express = require('express')

const connectDB = require('./utils/connectDB.util')

// ___ Init ___ //
const app = express()

// ___ Connect To DB ___ //
connectDB()

module.exports = app
