const passport = require('passport')

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: 'Authentication Failed!',
    successRedirect: '/',
    successFlash: 'Successfully Logged In'
})


exports.logout = (req, res) => {
    req.logout()
    req.flash('success', 'Logged out successfully')
    res.redirect('/')
}

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        next()
        return
    }
    req.flash('error', 'You must be logged in')
    res.redirect('/login')
}