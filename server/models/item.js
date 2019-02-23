const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true
    },
    description: String,
    brand: String,
    item_type: String,
    item_number: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
})

const modelClass = mongoose.model(
    'item', itemSchema
)

module.exports = modelClass