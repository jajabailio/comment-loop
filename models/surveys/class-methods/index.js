
const Joi = require('joi');
const ObjectId = require('mongoose').Types.ObjectId;

const classMethods = {};

classMethods.createValidateBody = function (body) {
    const schema = Joi.object().keys({
        name: Joi.string().min(4).required(),
        main_question: Joi.object().required(),
        text: Joi.string().min(4).required(),
        options: Joi.array().min(1).required()
    });
    return schema.validate(body);
}

classMethods.validateOptions = function (options) {
    let newOptions = [];
    let orderNumber = 1;
    options.forEach(option => {
        const id = ObjectId();
        option.order_number = orderNumber++;
        option._id = id;
        newOptions.push(option);
        if (option.question) {
            let questionOptions = validateQuestions(option.question);
            option.question.options = questionOptions;
        }
    });

    return newOptions;
}

function validateQuestions(question) {
    let newOptions = [];
    let orderNumber = 1;
    question.options.forEach(option => {
        const id = ObjectId();
        option.order_number = orderNumber++;
        option._id = id;
        if (option.question) {
            let formatOptions = validateQuestions(option.question);
            option.question.option = formatOptions;
        }
        newOptions.push(option);
    });

    return newOptions;
}

module.exports = classMethods;