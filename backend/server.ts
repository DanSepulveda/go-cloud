const express = require('express')
import Router from './routes'
const cors = require('cors')
require('dotenv').config()

const app = express()

// MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use('/api', Router)

const PORT = process.env.PORT || 4000

app.listen(`${PORT}`, () => console.log(`Server listening on port ${PORT}`))