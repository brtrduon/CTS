const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
// const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./router')
app.use(cors())
app.use(bodyParser())
router(app)

mongoose.connect('mongodb://localhost/items')

const port = process.env.PORT || 8000
const server = http.createServer(app)
server.listen(port)
console.log(`Server listening on ${port}`)