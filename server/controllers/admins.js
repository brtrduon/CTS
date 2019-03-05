const jwt = require('jwt-simple')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const config = require('../config')
const Admin = require('../models/admin')

tokenForAdmin = function(admin) {
    const timestamp = new Date().getTime()

    return jwt.encode({ 
        sub: admin._id, 
        iat: timestamp 
        }, config.secret
    )
}

exports.signIn = function(req, res, next) {
    res.send({
        token: tokenForAdmin(req.user)
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

// passport
// everything below this line is only for if admin is trying to login with an existing username in db
const localOptions = { usernameField: 'username'}
const localLogin = new LocalStrategy(localOptions, function(username, password, next) {
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

            return next(null, admin)
        })
    })
})

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, next) {
    Admin.findById(payload.sub, function(err, admin) {
        if (err) {
            return next(err, false)
        }

        if (admin) {
            done(null, admin)
        }

        else {
            done(null, false)
        }
    })
})

passport.use(jwtLogin)
passport.use(localLogin)