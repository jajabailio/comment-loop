
const _ = require('lodash');
const { Survey } = require('../../../../models');
const ObjectId = require('mongoose').Types.ObjectId;

exports.createSurvey = async (req, res) => {

    let survey;
    let questions;
    const mappedQuestions = [];
    
    const { error } = Survey.createValidateBody(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    try {
        let validated = Survey.validateOptions(req.body.question);
        survey = validated.survey;
        questions = validated.questions;

        questions.forEach(question => {
            const omitOptQuestion = question.options.map((option) => ({
                text: option.text,
                _id: option._id,
                question_id: option.question_id,
                order_number: option.order_number
            }));
            mappedQuestions.push({ ...question, options: omitOptQuestion })
        })

        // return res.json(mappedQuestions);
    } catch (err) { return res.status(400).json(err.replace(/Error: /g, '')); }

    try {
        
        const createObject = _.omit(req.body, 'question');
        const newSurvey = await Survey.create(Object.assign(createObject, { survey, questions: mappedQuestions }));
        res.json(newSurvey);

    } catch (err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
}