
const ObjectId = require('mongoose').Types.ObjectId;
const { Question, Option, Survey } = require('../../../../models');

exports.createQuestion = async (req, res) => {

    const { options, option_id, survey_id } = req.body;

    if(!ObjectId.isValid(option_id)) return res.status(400).json('Option is not valid');
    
    try {

        const findSurvey = await Survey.findById(survey_id);
        if(!findSurvey) return res.status(400).json('Survey not found');

        const findOption = await Option.findById(option_id);
        if(!findOption) return res.status(400).json('Option not found');

        const newQuestion = await Question.create(req.body);
        
        const updateOption = await Option.updateOne(
            { _id: ObjectId(option_id)}, { $set: { sub_question_id: newQuestion._id }}
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

