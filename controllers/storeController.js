const mongoose = require('mongoose')
const Store = mongoose.model('Store')

exports.homePage = (req, res) => {
    console.log(req.name)
    res.render('hello')
}

exports.addStore = (req, res) => {
    res.render('editStore', {
        title: 'Add Store'
    })
}

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save()
    req.flash('success', `Successfully created ${store.name}. Care to a leave a review`)
    res.redirect(`/store/${store.slug}`)
}

exports.getStores = async (req, res) => {
    const stores = await(Store.find())
    // console.log(stores)
    res.render('stores', {
        title: 'Stores',
        stores
    })
}

exports.editStore = async(req, res) => {
    const id = req.params.id
    const store = await(Store.findById(id))
    res.render('editStore', {
        title: `Edit ${store.name}`, store 
    })
}

exports.updateStore = async(req, res) => {
    const store = await(Store.findOneAndUpdate({_id: req.params.id}, req.body, {
        new:true,
        runValidators: true
    }).exec())
    req.flash('success', `Successfully update ${store.name}. <a href="/stores/${store.slug}">View Store</a>`)
    res.redirect(`/stores/${store._id}/edit`)
}