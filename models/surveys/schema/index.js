'use strict';

const Sequelize = require('sequelize');

const DEFINITION_OBJECT = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}

const CONFIGURATION_OBJECT = {};

module.exports = Object.freeze({
    definitionObject: DEFINITION_OBJECT,
    configurationObject: CONFIGURATION_OBJECT
})