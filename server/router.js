const path = require('path')

module.exports = app => {
    app.get('*', (req, res) => {
        res.redirect('http://localhost:3000')
    })

    app.post('/createItem', (req, res) => {
        console.log('pewp')
    })
}