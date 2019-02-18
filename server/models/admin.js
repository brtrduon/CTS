const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt-nodejs')

const adminSchema = new Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
})

adminSchema.pre('save', next => {
    const admin = this

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }

        bcrypt.hash(admin.password, salt, null, (err, hash) => {
            if (err) {
                return next(err)
            }

            admin.password = hash
            next()
        })
    })
})

