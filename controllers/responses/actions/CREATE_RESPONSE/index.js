
const _ = require('lodash')
const { Response, Survey } = require('../../../../models');

exports.createNewResponse = async (req, res) => {

    const { responses } = req.body;

    try {

        const findSurvey = await Survey.findById(req.params.survey_id);
        if(!findSurvey) return res.status(400).json('Survey is not found');

        if(responses.length < 1) return res.status(400).json('No question responses found');

        const createBody = Object.assign(
            _.pick(req.body, ['email', 'contact_number']),
            { questions: responses, survey_id: req.params.survey_id }
        )

        const createResponses = await Response.insertMany(createBody);
        res.json(createResponses);

    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}