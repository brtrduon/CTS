const Item = require('../models/item')
// const multer = require('multer')
// const upload = multer({dest: 'uploads/'})

exports.getItems = (req, res, next) => {
    Item.find({}, (err, items) => {
        if (err) {
            return next(err)
        }
        
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
    // let img = req.file

    // console.log(req)
    
    let item = new Item(
        {
            name,
            description,
            brand,
            item_type,
            item_number,
            price,
            weight,
            stock,
            // img
        }
    )

    item.save(err => {
        if (err) {
            return next(err)
        }
        res.json({
            item
        })
    })
}

exports.getItem = (req, res, next) => {
    Item.findOne({ _id: req.params._id }).exec((err, item) => {
        if (err) {
            return next(err)
        }

        res.json(item)
    })
}

exports.editItem = (req, res, next) => {
    let name = req.body.name
    let description = req.body.description
    let brand = req.body.brand
    let item_type = req.body.item_type
    let item_number = req.body.item_number
    let price = req.body.price
    let weight = req.body.weight
    let stock = req.body.stock

    Item.findById(req.body._id, (err, item) => {
        if (err) {
            return next(err)
        }

        item.name = name
        item.description = description
        item.brand = brand
        item.item_type = item_type
        item.item_number = item_number
        item.price = price
        item.weight = weight
        item.stock = stock
        item.save()
        res.json(item)
    })
}

exports.deleteItem = (req, res, next) => {
    Item.findByIdAndRemove(req.params._id, (err, item) => {
        if (err) {
            return next(err)
        }

        res.json('Item removed')
    })
}