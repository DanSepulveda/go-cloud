"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const Router = require('./routes');
const cors = require('cors');
require('dotenv').config();
const app = express();
// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use('/api', Router);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}
const PORT = process.env.PORT || 4000;
app.listen(`${PORT}`, () => console.log(`Server listening on port ${PORT}`));
