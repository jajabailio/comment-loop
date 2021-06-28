
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const ObjectId = require('mongoose').Types.ObjectId;

const classMethods = {};

classMethods.createValidate = function (body) {
    const schema = Joi.object().keys({
        survey_id: Joi.objectId().required(),
        email: Joi.string().email().allow(''),
        contact_number: Joi.string().allow(''),
        answers: Joi.array().required()
    });
    return schema.validate(body);
}

classMethods.validateQuestions = function (questions) {
    questions.forEach(question => { question.option_id = ObjectId(question.option_id); })
    return questions;
}


module.exports = classMethods;