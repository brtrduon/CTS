// const mongoose = require('mongoose')
const Item = require('../models/item')

exports.getItems = (req, res, next) => {
    Item.find({}, (err, items) => {
        if (err) {
            return next(err)
        }
        console.log(items)
        res.json(items)
    })
}

exports.createItem = (req, res, next) => {
    let name = req.body.name
    let description = req.body.description
    let brand = req.body.brand
    let item_type = req.body.item_type
    let item_number = req.body.item_number
    let price = req.body.price
    let weight = req.body.weight
    let stock = req.body.stock
    
    let item = new Item({
        name: name,
        description: description,
        brand: brand,
        item_type: item_type,
        item_number: item_number,
        price: price,
        weight: weight,
        stock: stock
    })

    item.save(err => {
        if (err) {
            return next(err)
        }
        res.json({
            item
        })
    })
}