if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT
const routes = require('./routes')

const { handleError } = require('./helpers/error')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(routes)

app.use((err, req, res, next) => {
    handleError(err, res)
})

app.listen(PORT, _ => {
    console.log('Listening to port', PORT)
})