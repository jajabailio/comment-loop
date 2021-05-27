'use strict';

const Sequelize = require('sequelize');

const DEFINITION_OBJECT = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    survey_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'surveys',
            key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const CONFIGURATION_OBJECT = {};

module.exports = Object.freeze({
    definitionObject: DEFINITION_OBJECT,
    configurationObject: CONFIGURATION_OBJECT
})