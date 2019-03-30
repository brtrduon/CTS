const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Item = require('./item')
const User = require('./user')

const cartSchema = new Schema({
    
})

const modelClass = mongoose.model(
    'cart', cartSchema
)

module.exports = modelClass