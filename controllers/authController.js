const passport = require('passport')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const crypto = require('crypto')

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

exports.forgot = async(req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user){
        req.flash('error', 'No account with that email exists.')
        return res.redirect('/login')
    }
    user.resetPasswordToken = crypto.randomBytes(20).toString('hex')
    user.resetPasswordExpires = Date.now() + 3600000
    await user.save()
    const resetURL = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`
    req.flash('success', `Password  reset link mailed at ${resetURL}`)
    res.redirect('/login')
}

exports.reset = async(req, res) => {
    console.log(req.params.token)
    const user = await User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: {
            $gt: Date.now()
        }
    })
    if(!user){
        req.flash('error', 'Password reset token has expired')
        return res.redirect('/login')
    }
}