
const express = require('express');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/surveys', require('../routes/surveys'));
    app.use('/api/questions', require('../routes/questions'));
    app.use('/api/options', require('../routes/options'));
}