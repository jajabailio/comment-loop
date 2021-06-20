
const ObjectId = require('mongoose').Types.ObjectId;
const { Survey } = require('../../../../models');

exports.listSurveyResponses = async (req, res) => {

    try {

        const fetchResponses = await Survey.aggregate([
            { "$match": { _id: ObjectId(req.params.id) } },
            {
                "$lookup": {
                    "from": "responses",
                    "localField": "main_question.options._id",
                    "foreignField": "option_id",
                    "as": "main_question.options.answer"
                }
            },
            {
                "$lookup": {
                    "from": "responses",
                    "localField": "main_question.question.options._id",
                    "foreignField": "option_id",
                    "as": "main_question.option.answer"
                }
            }
        ]);

        res.json(fetchResponses);

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}