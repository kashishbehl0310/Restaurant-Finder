const nodemailer = require('nodemailer')
const pug = require('pug')
const juice = require('juice')
const promisify = require('es6-promisify')

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    post: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

transport.sendMail({
    from: 'Kashish Behl <kashishbehl36@gmail.com>',
    to: 'example@mail.com',
    subject: 'Sample Mail',
    html: 'Hey <strong>Sample mail</strong>',
    text: 'Sample mail you got'
})