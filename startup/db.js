
require('dotenv').config();
const mongoose = require('mongoose');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

module.exports = function () {
    mongoose.connect(config.host, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => { console.error('Mongoose connect error: ', err) });
}