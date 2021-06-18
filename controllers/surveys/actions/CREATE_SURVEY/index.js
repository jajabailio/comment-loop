
const { Survey } = require('../../../../models');

exports.createSurvey = async (req, res) => {

    const { options, text } = req.body.main_question;

    try {

        const { error } = Survey.createValidateBody(Object.assign({}, { ...req.body, options, text }));
        if (error) return res.status(400).json(error.details[0].message);

        const validate_opts = Survey.validateOptions(options);

        const newSurvey = await Survey.create(Object.assign(req.body, { options: validate_opts }));
        res.json(newSurvey)

    } catch (err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
}