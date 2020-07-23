const jwt = require('jsonwebtoken')
const responseHandler = require('../handlers/response.handler')
// ___ Generate Token ___ //

exports.getToken = function (payload) {
  console.log("HI")
  return jwt.sign(
    payload,
    process.env.JWT_SECRET_KEY,
    { expiresIn: 3600 }
  )
}
// ___ Authorisation and permission middleware ___ //

exports.verifyOrdinaryUser = function(req, res, next) {
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decoded) {
      if (err) {
        return responseHandler.resHandler(false, err, "You are not authenticated!", res, 401)
      } else {
        req.decoded = decoded;
        next();
      }
    });
      } else {
      return responseHandler.resHandler(false, null, "No token provided!", res, 403)
  }
};