'use strict';

const schema = require('./schema');
const CONSTANTS = require('./constants');

Object.assign(schema.configurationObject, {
    hooks: require('./hooks'),
    scopes: require('./scopes')
});

module.exports = (sequelize) => {
    const Model = sequelize.define(
        CONSTANTS.MODEL,
        schema.definitionObject,
        schema.configurationObject
    );

    Object.assign(Model, require('./class-methods'));

    Object.assign(Model, CONSTANTS);

    Object.assign(Model, require('./schema/relations').establishRelations(Model));

    return Model;
}