const nodemailer = require('nodemailer')

const setupNodemailerTransport = {
  host: process.env.MAILER_HOST || 'localhost',
  port: process.env.MAILER_PORT || 1025,
  secure: process.env.MAILER_SECURE || false,
  ignoreTLS: process.env.MAILER_IGNORE_TLS || true
}

const transporter = nodemailer.createTransport(setupNodemailerTransport)

exports.confirmBooking = async (email) => {
  const info = await transporter.sendMail({
    from: "'Chez nestor' <contact@chez-nestor.fr>",
    to: email,
    subject: 'Booking confirmation',
    text: 'Your booking have been sumbmited',
    html: '<b>Your booking have been sumbmited</b>'
  })

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}

exports.confirmAccountCreation = async (email) => {
  const info = await transporter.sendMail({
    from: "'Chez nestor' <contact@chez-nestor.fr>'",
    to: email,
    subject: 'Account creation',
    text: ' Chez-nestor : Congratulation your account have been created',
    html:
      '<H1>Chez-nestor : Congratulation your account have been created</H1>'
  })

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}
