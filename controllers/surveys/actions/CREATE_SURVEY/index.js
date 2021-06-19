
const { Survey } = require('../../../../models');

exports.createSurvey = async (req, res) => {

    let validate_opts;
    const { options, text } = req.body.main_question;

    const { error } = Survey.createValidateBody(Object.assign({}, { ...req.body, options, text }));
    if (error) return res.status(400).json(error.details[0].message);

    try {
        console.log('before valid_opts')
        validated_opts = Survey.validateOptions(options);
        console.log(validated_opts)
        console.log('after valid_opts')
    } catch (err) {

        return res.status(400).json(err.replace(/Error: /g, ''));
    }

    try {

        // const newSurvey = await Survey.create(Object.assign(req.body, { options: validate_opts }));
        // res.json(newSurvey)
        res.json(validated_opts);

    } catch (err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
}