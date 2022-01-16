const express = require('express')
const cors = require('cors')
const Router = require('./routes')

const app = express()

// MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use('/api', Router)

const PORT = process.env.PORT || 4000

app.listen(`${PORT}`, () => console.log(`Server listening on port ${PORT}`))