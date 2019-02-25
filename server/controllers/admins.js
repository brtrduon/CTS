const jet = require('jwt-simple')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const config = require('../config')
const Admin = require('../models/admin')

tokenForAdmin = admin => {
    const timestamp = new Date().getTime();

    return jwt.encode({ 
        sub: admin.id, 
        iat: timestamp 
        }, config.secret
    )
}

exports.signIn = (req, res, next) => {
    res.send({
        token: tokenForAdmin(req.admin)
    })
}

exports.signUp = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        return res.json('Username and/or password cannot be blank')
    }

    Admin.findOne({ username }, (err, existingAdmin) => {
        if (err) {
            return next(err)
        }

        if (existingAdmin) {
            return res.json('Username already in use')
        }

        const admin = new Admin({
            username,
            password
        })

        admin.save(err => {
            if (err) {
                return next(err)
            }

            res.json({
                token: tokenForAdmin(admin)
            })
        })
    })
}