
const mongoose = require('mongoose');
const schema = require('./schema');

const Model = mongoose.model('surveys', schema);

module.exports = Model;