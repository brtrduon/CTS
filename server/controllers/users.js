const jwt = require('jwt-simple')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const config = require('../config')
const User = require('../models/user')

tokenForUser = function(user) {
    const timestamp = new Date().getTime()

    return jwt.encode({ 
        sub: user._id, 
        iat: timestamp 
        }, config.secret
    )
}

exports.signIn = function(req, res, next) {
    res.send({
        token: tokenForUser(req.user)
    })
}

exports.signUp = function(req, res, next) {
    const username = req.body.username
    const email = req.body.email
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const password = req.body.password

    if (!username || !password) {
        return res.json('Username / email / first name / last name / password cannot be blank')
    }

    User.findOne({ username }, function(err, existingUser) {
        if (err) {
            return next(err)
        }

        if (existingUser) {
            return next(res.json('Username already in use'))
        }

        const user = new User({
            username, email, first_name, last_name, password
        })

        user.save(function(err) {
            if (err) {
                return next(err)
            }

            res.json({
                token: tokenForUser(user)
            })
        })
    })
}

// passport
// everything below this line is only for if user is trying to login with an existing username in db
const localOptions = { usernameField: 'username'}
const localLogin = new LocalStrategy(localOptions, function(username, password, next) {
    User.findOne({ username }, function(err, user) {
        if (err) {
            return next(err)
        }

        if (!user) {
            return next(null, false)
        }

        user.comparePassword(password, function(err, isMatch) {
            if (err) {
                return next(err)
            }

            if (!isMatch) {
                return next(null, false)
            }

            return next(null, user)
        })
    })
})

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, next) {
    User.findById(payload.sub, function(err, user) {
        if (err) {
            return next(err, false)
        }

        if (user) {
            done(null, user)
        }

        else {
            done(null, false)
        }
    })
})

passport.use(jwtLogin)
passport.use(localLogin)