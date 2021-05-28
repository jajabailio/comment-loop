
const mongoose = require('mongoose');
const schema = require('./schema');

const Model = mongoose.model('questions', schema);

module.exports = Model;