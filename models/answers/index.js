
const mongoose = require('mongoose');
const schema = require('./schema');

const Model = mongoose.model('answers', schema);

module.exports = Model;