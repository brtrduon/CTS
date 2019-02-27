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

adminSchema.pre('save', function(next) {
    // if I do not use regular function here, "this" will cause bcrypt to not function properly
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

adminSchema.methods.comparePassword = (candidatePassword, next) => {
    bcrypt.compare(candidatePassword, this.password, (err, done) => {
        if (err) {
            return next(err)
        }

        next(null, done)
    })
}

const modelClass = mongoose.model(
    'admin', adminSchema
)

module.exports = modelClass