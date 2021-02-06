if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const routes = require('./routes')

const { handleError } = require('./helpers/error')

app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(routes)

app.use((err, req, res, next) => {
    handleError(err, res)
})

app.listen(PORT, _ => {
    console.log('listening to port', PORT)
})