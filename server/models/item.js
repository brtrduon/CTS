const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    description: String,
    brand: String,
    item_type: String,
    item_number: String,
    price: Number,
    weight: Number,
    stock: Number
})

module.exports = itemSchema