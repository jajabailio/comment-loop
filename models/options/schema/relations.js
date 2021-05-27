'use strict';

module.exports.establishRelations = (Option) => {
    Option.associate = function(models) {
        Option.belongsTo(models.question, { foreingKey: 'question_id' });
        Option.belongsTo(models.question, { as: 'sub_question', foreingKey: 'sub_question_id' });
    }
    return Option;
}