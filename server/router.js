const path = require('path')

module.exports = app => {
    app.get('*', (req, res) => {
        res.redirect('http://localhost:3000')
    })
}