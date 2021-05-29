
const { Survey, Question, Option } = require('../../../../models');

exports.createSurvey = async (req, res) => {

    const { question, options } = req.body;

    try {

        const newSurvey = await Survey.create({ isActive: true });
        const newQuestion = await Question.create({ survey_id: newSurvey._id, text: question.text, isMain: true });
        
        const mapOptions = options.map(opt => ({ ...opt, question_id: newQuestion._id}));
        const newOptions = await Option.insertMany(mapOptions);

        newQuestion._doc.options = newOptions;          //* add options prop to data values of question
        newSurvey._doc.question = newQuestion;          //* add question prop to the survey

        res.json(newSurvey)

    } catch(err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
}