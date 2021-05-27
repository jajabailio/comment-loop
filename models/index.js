'use strict';

require('dotenv').config();

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

/*//! Reads directories in the models folder. Make sure to name your models in lower cases and use '-' instead of '_' for separating words */
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}
var defaultModel = getDirectories(__dirname);
var modelNames = [];
for(var i = 0; i < defaultModel.length; i++) {
  var find = '-';
  var replace = new RegExp(find, 'g');
  modelNames.push(defaultModel[i].replace(replace, "_"));
  const model = sequelize['import'](path.join(__dirname, defaultModel[i]));
  db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
