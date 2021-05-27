'use strict';

module.exports.establishRelations = (Question) => {
    Question.associate = function(models) {
        Question.belongsTo(models.survey, { foreignKey: 'survey_id' });
        Question.hasMany(models.option, { foreignKey: 'question_id' });
        Question.hasMany(models.option, { as: 'sub_question', foreignKey: 'sub_question_id' });
    }
    return Question;
}