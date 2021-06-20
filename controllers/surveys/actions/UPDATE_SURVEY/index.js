
const ObjectId = require('mongoose').Types.ObjectId;
const { Survey } = require('../../../../models');

exports.updateSurvey = async (req, res) => {

    let validate_opts;
    const { options, text } = req.body.main_question;

    const { error } = Survey.createValidateBody(Object.assign({}, { ...req.body, options, text }));
    if (error) return res.status(400).json(error.details[0].message);

    try { validated_opts = Survey.validateOptions(options); }
    catch (err) { return res.status(400).json(err.replace(/Error: /g, '')); }

    try {

        const mainId = ObjectId(req.params.id);
        const fetchSurvey = await Survey.findOne({ mainId }).sort({ version_number: -1 }).select('_id version_number');
        if (!fetchSurvey) return res.status(404).json('Survey not found');

        console.log('the fetched one: ', fetchSurvey);

        const updateBody = Object.assign(req.body, { mainId, version_number: fetchSurvey.version_number + 1 });
        const updatedSurvey = await Survey.create(updateBody);

        await Survey.updateOne({ _id: fetchSurvey._id }, { $set: { isActive: false } });

        res.json(updatedSurvey);

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}

