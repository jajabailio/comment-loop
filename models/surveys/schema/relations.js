'use strict';

module.exports.establishRelations = (Survey) => {
    Survey.associate = function(models) {
        Survey.hasMany(models.question, { foreignKey: 'survey_id' });   
    }
    return Survey;
}