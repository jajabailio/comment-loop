
const ObjectId = require('mongoose').Types.ObjectId;
const { Survey } = require('../../../../models');

exports.surveyResponses = async (req, res) => {

    try {

        const fetchSurvey = await Survey.aggregate([
            { "$match": { _id: ObjectId(req.params.survey_id) }},
            {
                "$lookup": {
                    "from": "questions",
                    "localField": "_id",
                    "foreignField": "survey_id",
                    "as": "questions"
                }
            },
            { "$unwind": { "path": "$questions", "preserveNullAndEmptyArrays": true} },
            {
                "$lookup": {
                    "from": "options",
                    "localField": "questions._id",
                    "foreignField": "question_id",
                    "as": "questions.options"
                }
            },
            { "$unwind": { "path": "$questions.options", "preserveNullAndEmptyArrays": true} },
            {
                "$lookup": {
                    "from": "answers",
                    "localField": "questions.options._id",
                    "foreignField": "option_id",
                    "as": "questions.options.answers"
                },
            },
            { "$project": {
                "createdAt": 0, "updatedAt": 0, "isActive": 0,
                "questions.createdAt": 0, "questions.updatedAt": 0,
                "questions.options.createdAt": 0, "questions.options.updatedAt": 0,
                "questions.options.answers.createdAt": 0, "questions.options.answers.updatedAt": 0, 
                
            }},
        ]);

        res.json(fetchSurvey);

    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}