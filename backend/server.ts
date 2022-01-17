import express from 'express'
import { Request, Response } from 'express'
import Router from './routes'
const cors = require('cors')

const app = express()

// MIDDLEWARES
app.use(cors())
app.use(express.json())
app.get('/', (req: Request, res: Response) => res.send('hola'))
app.use('/api', Router)

const PORT = process.env.PORT || 4000

app.listen(`${PORT}`, () => console.log(`Server listening on port ${PORT}`))