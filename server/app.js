if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(routes)

app.listen(PORT, _ => {
    console.log('listening to port', PORT)
})