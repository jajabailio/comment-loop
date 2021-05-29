
const ObjectId = require('mongoose').Types.ObjectId;
const { Survey, Option, Response, Question } = require('../../../../models');

exports.surveyResponses = async (req, res) => {

    try {

        const fetchSurvey = await Question.aggregate([
            { "$match": { survey_id: ObjectId(req.params.survey_id) }},
            { "$project": { "createdAt": 0, "updatedAt": 0 }},
            {
                "$lookup": {
                    "from": "option",
                    "localField": "data._id",
                    "foreignField": "questions_id",
                    "as": "options"
                }
            },
            // { "$unwind": "$options" },
            {
                "$group": {
                    "_id": "$options._id",
                    "count": { "$sum" :1 }
                }
            }
        ]);

        res.json(fetchSurvey);

    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}