
const mongoose = require('mongoose');
const schema = require('./schema');
const classMethods = require('./class-methods');

const Model = mongoose.model('surveys', schema);

Object.assign(Model, classMethods);

module.exports = Model;