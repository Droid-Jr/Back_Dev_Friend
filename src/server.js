const app = require('./app');
const db = require('./config/database');
const model = require('./models/user.models');
require('dotenv').config()

model;
db.sync()

const PORT = process.env.PORT ?? 8000

const server = app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`)});


    module.exports = server