const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Item = require('./item')
const User = require('./user')

const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: User },
    item: [{ type: Schema.Types.ObjectId, ref: Item }]
})

const modelClass = mongoose.model(
    'cart', cartSchema
)

module.exports = modelClass