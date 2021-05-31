
const _ = require('lodash')
const { Response, Survey, Answer } = require('../../../../models');

exports.createNewResponse = async (req, res) => {

    const { responses } = req.body;

    try {

        const findSurvey = await Survey.findById(req.params.survey_id);
        if(!findSurvey) return res.status(400).json('Survey is not found');

        if(responses.length < 1) return res.status(400).json('No question responses found');

        const createBody = Object.assign(
            _.pick(req.body, ['email', 'contact_number']),
            { survey_id: req.params.survey_id }
        );

        const createResponse = await Response.create(createBody);

        const mapAnswers = responses.map((response) => ({
            ...response,
            response_id: createResponse._id
        }));

        const createAnswers = await Answer.insertMany(mapAnswers);

        createResponse._doc.answers = createAnswers
        res.json(createResponse);

    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}