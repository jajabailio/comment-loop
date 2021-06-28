
const { ObjectId } = require('mongoose').Types;
const { Answer, Survey } = require('../../../../models');
const formatResponse = require('./formatResponse');

exports.fetchSurveyResponses = async (req, res) => {
    
    try {

        const fetchResponse = await Survey.aggregate([
            { "$match": { _id: ObjectId(req.params.survey_id) }},
            { "$project": { "questions": 1 }},
            { "$unwind": { "path": "$questions", "preserveNullAndEmptyArrays": true } },
            { "$unwind": { "path": "$questions.options", "preserveNullAndEmptyArrays": true } },
            {
                "$lookup": {
                    "from": "answers",
                    "localField": "questions.options._id",
                    "foreignField": "option_id",
                    "as": "questions.options.answers"
                }
            },
            { "$unwind": { "path": "$questions.options.answers", "preserveNullAndEmptyArrays": true } },
            {
                "$lookup": {
                    "from": "responses",
                    "localField": "questions.options.answers.response_id",
                    "foreignField": "_id",
                    "as": "questions.options.answers.commentBy"
                }
            },
            {
                "$project": {
                    "questions.options.answers.commentBy.answers": 0, "questions.options.answers.commentBy._id": 0, "questions.options.answers.commentBy.createdAt": 0, "questions.options.answers.commentBy.updatedAt": 0, "questions.options.answers.commentBy.__v": 0, "questions.options.answers.commentBy.survey_id": 0,
                    "questions.options.answers.__v": 0, "questions.options.answers.createdAt": 0, "questions.options.answers.updatedAt": 0, "questions.options.answers.survey_id": 0,

                }
            }
        ]);

        const formatted = formatResponse(fetchResponse);

        res.json(formatted);
        // res.json(fetchResponse);

    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}