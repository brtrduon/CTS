const User = require('../models/user')
const Item = require('../models/item')
const Cart = require('../models/cart')

exports.addToCart = function(req, res, next) {
    // console.log(req.params._id)

    // console.log(req.body.user)

    let user = req.body.user
    let item = req.params._id

    Cart.findOne({ user }, function(err, cart) {


        // console.log(cart.item)
        if (err) {
            return next(err)
        }

        if (!cart) {
            const newCart = new Cart({
                user,
                item
            })

            newCart.save(function(err) {
                if (err) {
                    return next(err)
                }

                res.json(newCart)
            })
        }

        if (cart) {
            for (i of cart.item) {
                if (i == item) {
                    console.log('item exists. need to update quantity')
                }
            }

            cart.item.push(item)
            cart.save(function(err) {
                if (err) {
                    return next(err)
                }

                res.json(cart)
            })
        }
    })
}

exports.getCartItemCount = function(req, res, next) {
    let user = req.params.user

    Cart.findOne({ user }).exec((err, cart) => {
        if (err) {
            return next(err)
        }

        res.json(cart)
    })
}