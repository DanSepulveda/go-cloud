import { Request, Response } from 'express'
const express = require('express')
const path = require('path')
const cors = require('cors')
require('dotenv').config()
const router = require('./routes.ts')
const morgan = require('morgan')

const app = express()

// MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

const PORT = process.env.PORT || 4000

app.listen(`${PORT}`, '0.0.0.0', () => console.log(`Server listening on port ${PORT}`))