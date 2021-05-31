
const ObjectId = require('mongoose').Types.ObjectId;
const { Question, Option, Survey } = require('../../../../models');

exports.createQuestion = async (req, res) => {

    const { options, option_ids, survey_id } = req.body;

    // if(!ObjectId.isValid(option_id)) return res.status(400).json('Option is not valid');
    
    try {

        const objectify = [];
        option_ids.forEach(id => objectify.push(ObjectId(id)));

        const findSurvey = await Survey.findById(survey_id);
        if(!findSurvey) return res.status(400).json('Survey not found');

        // const findOption = await Option.find({ _id: { $in: { objectify }}});
        // if(!findOption) return res.status(400).json('Option not found');

        // const optionIdsMap = [];
        // findOption.forEach((opt) => optionIdsMap.push(opt._id))

        const newQuestion = await Question.create(req.body);
        
        const updateOption = await Option.updateMany(
            { _id: { $in: objectify } }, { $set: { sub_question_id: newQuestion._id }}
        );

        const mapOptions = options.map((opt) => ({ ...opt, question_id: newQuestion._id }));
        const newOptions = await Option.insertMany(mapOptions);

        newQuestion._doc.options = newOptions;

        res.json(newQuestion);
        
    } catch(err) {
        console.error(err);
        return res.status(500).json('Internal Server Error');
    }
}

