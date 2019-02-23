const items = require('./controllers/items')

module.exports = app => {
    app.get('*', (req, res) => {
        res.redirect('http://localhost:3000')
    })

    app.post('/createitem', items.createItem)
}