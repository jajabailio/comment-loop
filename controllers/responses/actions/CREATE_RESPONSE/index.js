
const { Response, Answer } = require('../../../../models');

exports.createNewResponse = async (req, res) => {

    try {

        const answers = req.body.answers;

        const { error } = Response.createValidate(req.body);
        if (error) return res.status(400).json(error.details[0].message);

        const response = await Response.create(req.body);

        const mappedAnswers = answers.map((answer) => ({ ...answer, response_id: response._id, survey_id: response.survey_id }));
        const answer = await Answer.insertMany(mappedAnswers);

        res.json(Object.assign({}, response._doc, { answers: answer } ));

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}