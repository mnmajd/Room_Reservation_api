if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// ___ Running ___ //
const PORT = process.env.PORT || 4500

module.exports = require('./src').listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode at port ${PORT}`)
)
