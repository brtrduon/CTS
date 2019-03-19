const jwt = require('jwt-simple')
const config = require('../config')
const Admin = require('../models/admin')
const User = require('../models/user')

tokenForAdmin = function(admin) {
    const timestamp = new Date().getTime()

    return jwt.encode({ 
        sub: admin._id, 
        iat: timestamp 
        }, config.secret
    )
}

exports.signIn = function(req, res, next) {
    let username = req.body.username
    let password = req.body.password

    Admin.findOne({ username }, function(err, admin) {
        if (err) {
            return next(err)
        }

        if (!admin) {
            return next(null, false)
        }

        admin.comparePassword(password, function(err, isMatch) {
            if (err) {
                return next(err)
            }

            if (!isMatch) {
                return next(null, false)
            }

            res.send({
                token: tokenForAdmin(admin)
            })
            return next(null, admin)
        })
    })

}

exports.signUp = function(req, res, next) {
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        return res.json('Username and/or password cannot be blank')
    }

    Admin.findOne({ username }, function(err, existingAdmin) {
        if (err) {
            return next(err)
        }

        if (existingAdmin) {
            return next(res.json('Username already in use'))
        }

        const admin = new Admin({
            username,
            password
        })

        admin.save(function(err) {
            if (err) {
                return next(err)
            }

            res.json({
                token: tokenForAdmin(admin)
            })
        })
    })
}

exports.getUsers = (req, res, next) => {
    User.find({}, (err, users) => {
        if (err) {
            return next(err)
        }

        res.json(users)
    })
}