const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

const router = require('./router')
app.use(bodyParser())
app.use(cors())
router(app)

mongoose.connect('mongodb://localhost/items')

const port = process.env.PORT || 8003
const server = http.createServer(app)
server.listen(port)
console.log(`Server listening on ${port}`)