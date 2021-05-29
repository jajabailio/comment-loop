
const mongoose = require('mongoose');
const schema = require('./schema');

const Model = mongoose.model('responses', schema);

module.exports = Model;