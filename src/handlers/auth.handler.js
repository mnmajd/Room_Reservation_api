const jwt = require('jsonwebtoken')

exports.getToken = function (payload) {
  console.log("HI")
  return jwt.sign(
    payload,
    process.env.JWT_SECRET_KEY,
    { expiresIn: 3600 }
  )
}
