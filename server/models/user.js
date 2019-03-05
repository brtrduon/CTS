const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
        // regex for email format for backend security?
    },
    first_name: String,
    last_name: String,
    password: String
})

userSchema.pre('save', function(next) {
    // if I do not use regular function here, "this" will cause bcrypt to not function properly
    const user = this

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err)
            }

            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, function(err, done) {
        if (err) {
            return next(err)
        }

        next(null, done)
    })
}

const modelClass = mongoose.model(
    'user', userSchema
)

module.exports = modelClass