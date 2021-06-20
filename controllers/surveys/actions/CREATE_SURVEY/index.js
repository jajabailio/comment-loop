
const { Survey } = require('../../../../models');
const ObjectId = require('mongoose').Types.ObjectId;

exports.createSurvey = async (req, res) => {

    let validate_opts;
    const { options, text } = req.body.main_question;

    const { error } = Survey.createValidateBody(Object.assign({}, { ...req.body, options, text }));
    if (error) return res.status(400).json(error.details[0].message);

    try { validated_opts = Survey.validateOptions(options); }
    catch (err) { return res.status(400).json(err.replace(/Error: /g, '')); }

    try {

        const _id = ObjectId();
        Object.assign(req.body.main_question, { _id });
        const newSurvey = await Survey.create(Object.assign(req.body, { _id, mainId: _id, options: validate_opts }));
        res.json(newSurvey);

    } catch (err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
}