const passport = require('passport')

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: 'Authentication Failed!',
    successRedirect: '/',
    successFlash: 'Successfully Logged In'
})