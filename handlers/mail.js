// const nodemailer = require('nodemailer')
// const pug = require('pug')
// const juice = require('juice')
// const htmltotext = require('html-to-text')
// const promisify = require('es6-promisify')

// const transport = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS
//     }
// })

// const generateHtml = (filename, options = {}) => {
//     const html = pug.renderFile(`${__dirname}/../views/email/${filename}.pug`, options)
//     const inline = juice(html)
//     return inline
// }

// exports.send = async(options) => {
//     const html = generateHtml(options.filename, options)
//     const text = htmltotext.fromString(html)
//     const mailOptions = {
//         from: `Kashish Behl <noreply@kashish.com>`,
//         to: options.user.email,
//         subject: options.subject,
//         html,
//         text
//     }
//     const sendMail = promisify(transport.sendMail, transport)
//     return sendMail(mailOptions)
// }