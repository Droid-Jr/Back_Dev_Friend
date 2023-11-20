const express = require('express');
const userRouter = require('./routes/user.router');
const cors = require('cors')
require('dotenv').config()

const app =  express();

app.use(cors());
app.use(express.json());

app.use(userRouter)

app.get('/', (req, res) => {
res.send('Bienvenido ami servidor');
});

module.exports= app