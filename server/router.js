const items = require('./controllers/items')

module.exports = app => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.get('/', (req, res) => {
        res.redirect('http://localhost:3000')
    })

    app.get('/getitems', items.getItems)

    app.post('/createitem', items.createItem)
}