const Client = require('../models/client.model')
const responseHandler = require('../handlers/response.handler')
const auth = require('../handlers/auth.handler')
const mailService = require('../services/mail.service');

exports.register = async (req, res, next) => {
  console.log('H0')
  try {
    const client = ({
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      nationality,
      password
    } = req.body)
    const newClient = new Client()
    client.password = newClient.generateHash(client.password)
    const user = await Client.findOne({ email: client.email })

    if (!user) {
      const result = await Client.create(client)

      mailService.confirmAccountCreation(result.email);

      return responseHandler.resHandler(true, result, '', res, 200)
    } else {
      return responseHandler.resHandler(false, {}, 'Email already existed', res, 400)
    }
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.login = async (req, res, next) => {
  try {
    const user = await Client.findOne({ email: req.body.email })

    if (!user) {
      return responseHandler.resHandler(false, {}, 'Bad credentiels', res, 400)
    }

    if (!user.validPassword(req.body.password)) {
      return responseHandler.resHandler(false, {}, 'password or email incorrect', res, 400)
    } else {
      const payload = {
        email: user.email,
        username: user.username,
        id: user._id
      }

      const token = auth.getToken(payload)
      return responseHandler.resHandler(true, token, 'Loged in succesfuly', res, 200)
    }
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.getClients = async (req, res, next) => {
  try {
    const result = await Client.find()

    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.getClientById = async (req, res, next) => {
  try {
    const result = await Client.findOne({ _id: req.params.id })
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.updateClient = async (req, res, next) => {
  try {
    const updatedClient = ({
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      nationality,
      password
    } = req.body)

    const result = await Client.findOneAndUpdate(
      { _id: req.params.id },
      updatedClient,
      { new: true }
    )

    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}

exports.deleteClient = async (req, res, next) => {
  try {
    const result = await Client.findOneAndDelete({ _id: req.params.id })
    return responseHandler.resHandler(true, result, null, res, 200)
  } catch (error) {
    return responseHandler.resHandler(false, error, null, res, 500)
  }
}
