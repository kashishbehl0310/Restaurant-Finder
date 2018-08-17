const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise 

const md5 = require('md5')
const validator = require('validator')
const mongodberrorHandler = require('mongoose-mongodb-errors')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please supply an email address'
    },
    name: {
        type: String,
        required: 'Please supply a name',
        trim: true
    }
})

userSchema.plugin(passportLocalMongoose, {userNameField: 'email'})
userSchema.plugin(mongodberrorHandler)

module.exports = mongoose.model('Users', userSchema)