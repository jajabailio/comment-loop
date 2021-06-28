
const Joi = require('joi');
const ObjectId = require('mongoose').Types.ObjectId;

const classMethods = {};

classMethods.createValidateBody = function (body) {
    const schema = Joi.object().keys({
        name: Joi.string().min(4).required(),
        question: Joi.object().required(),
        // text: Joi.string().min(4).required(),
        // options: Joi.array().min(1).required()
    });
    return schema.validate(body);
}

classMethods.validateOptions = function (question) {
    let validatedQuestion;

    try {
        validatedQuestion = validateQuestions(question, null, [], 0);
    } catch(err) {
        throw new Error(err).toString();
    }

    let sortQuestions = validatedQuestion.questionArray;
    sortQuestions.sort((a, b) => (a.order > b.order) ? 1 : -1);

    return { survey: validatedQuestion.question, questions: sortQuestions };
}

function validateQuestions(question, option_id, questionArray, questionOrder) {

    if(option_id) question.option_id = option_id;

    question.order = ++questionOrder;

    let newOption = [];
    let orderNumber = 1;

    const questionId = ObjectId();
    question._id = questionId;

    if(question.text == '' || !question.text) throw new Error('Questions must have a valid text');

    if(question.options.length < 1) throw new Error(`Question "${question.text}" requires at least one or two options`);

    question.options.forEach(option => {
        if(option.text == '' || !option.text) 
            throw new Error('There are empty options in a question. Make sure all options are valid');

        if(!option._id) {
            const id = ObjectId();
            option._id = id;
            option.question_id = questionId;
        } else {
            option._id = ObjectId(option._id);
        }

        option.order_number = orderNumber++;

        if(option.question) {
            try {
                let newOptions = validateQuestions(option.question, option._id, questionArray, questionOrder);
                option.question = newOptions.question;
                questionArray = newOptions.questionArray;
                questionOrder = newOptions.questionOrder;
            } catch(err) {
                throw new Error(err);
            }
        }

        newOption.push(option);
    });

    question.options = newOption;
    questionArray.push(question)

    return { question, questionArray, questionOrder};
}

module.exports = classMethods;