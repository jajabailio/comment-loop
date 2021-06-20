
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

    if (options.length < 1) throw new Error('Survey requires at least one or two options');

    options.forEach(option => {
        if (option.text == '' || !option.text)
            throw new Error('There are empty options in a question. Make sure all options are valid').toString();

        if (!option._id) {
            const id = ObjectId();
            option._id = id;
        } else {
            option._id = ObjectId(option._id);
        }

        option.order_number = orderNumber++;
        newOptions.push(option);

        if (option.question) {
            if (option.question.text == '' || !option.question.text)
                throw new Error('There are empty questions in the survey. Make sure all questions are valid').toString();

            try {
                let questionOptions = validateQuestions(option.question);
                option.question.options = questionOptions;
            } catch (err) {
                throw new Error(err).toString();
            }
        }
    });

    return newOptions;
}

function validateQuestions(question) {
    let newOptions = [];
    let orderNumber = 1;

    if (question.options.length < 1) throw new Error(`Question "${question.text}" requires at least one or two options`)

    question.options.forEach(option => {
        if (option.text == '' || !option.text)
            throw new Error('There are empty options in a question. Make sure all optinos are valid');

        if (!option._id) {
            const id = ObjectId();
            option._id = id;
        } else {
            option._id = ObjectId(option._id);
        }

        option.order_number = orderNumber++;

        if (option.question) {
            if (option.question.text == '' || !option.question.text)
                throw new Error('There are empty questions in the survey. Make sure all questions are valid');

            try {
                let formatOptions = validateQuestions(option.question);
                option.question.options = formatOptions;
            } catch (err) {
                throw new Error(err);
            }
        }
        newOptions.push(option);
    });

    return newOptions;
}

module.exports = classMethods;