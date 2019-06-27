const passport = require('passport')
const items = require('./controllers/items')
const admins = require('./controllers/admins')
const users = require('./controllers/users')
const cart = require('./controllers/cart')
const requireSignIn = passport.authenticate('local', { session: false })

const multer = require('multer')
const upload = multer({dest: 'uploads/'})


module.exports = app => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
        next();
      })

    app.get('/', (req, res) => {
        res.redirect('http://localhost:2000')
    })

    app.get('/getitems', items.getItems)

    app.post('/adminsignin', admins.signIn)

    app.post('/adminsignup', admins.signUp)

    app.get('/getusers', admins.getUsers)

    app.post('/createitem', upload.single('img'), items.createItem)

    app.get('/getitem/:_id', items.getItem)

    app.patch('/edititem/:_id', items.editItem)

    app.delete('/deleteitem/:_id', items.deleteItem)

    app.post('/signin', requireSignIn, users.signIn)

    app.post('/signup', users.signUp)

    app.post('/addtocart/:_id', cart.addToCart)

    app.get('/getcartitemcount/:user', cart.getCartItemCount)

    app.patch('/removeitemfromcart/:_id', cart.removeItemFromCart)
}