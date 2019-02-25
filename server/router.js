const items = require('./controllers/items')
const admins = require('./controllers/admins')

module.exports = app => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        next();
      });

    app.get('/', (req, res) => {
        res.redirect('http://localhost:3000')
    })

    app.get('/getitems', items.getItems)

    app.post('/adminlogin')

    app.post('/adminsignup', admins.signUp)

    app.post('/createitem', items.createItem)

    app.get('/getitem/:_id', items.getItem)

    app.patch('/edititem/:_id', items.editItem)

    app.delete('/deleteitem/:_id', items.deleteItem)
}