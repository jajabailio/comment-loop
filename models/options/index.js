
const mongoose = require('mongoose');
const schema = require('./schema');

const Model = mongoose.model('options', schema);

module.exports = Model;