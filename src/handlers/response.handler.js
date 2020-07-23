// ___ Sweet Response handler ___ //
exports.resHandler = (success, data, message, res, status) => {
    return res.status(status).json({
      success,
      data,
      error: message
    })
  }