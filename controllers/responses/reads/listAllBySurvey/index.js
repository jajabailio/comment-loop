
const ObjectId = require('mongoose').Types.ObjectId;
const { Survey } = require('../../../../models');

exports.surveyResponses = async (req, res) => {

    try {

        const fetchSurvey = await Survey.aggregate([
            { "$match": { _id: ObjectId(req.params.survey_id) } },
            {
                "$lookup": {
                    "from": "questions",
                    "localField": "_id",
                    "foreignField": "survey_id",
                    "as": "questions"
                }
            },
            { "$unwind": { "path": "$questions", "preserveNullAndEmptyArrays": true } },
            {
                "$lookup": {
                    "from": "options",
                    "localField": "questions._id",
                    "foreignField": "question_id",
                    "as": "questions.options"
                }
            },
            { "$unwind": { "path": "$questions.options", "preserveNullAndEmptyArrays": true } },
            {
                "$lookup": {
                    "from": "answers",
                    "localField": "questions.options._id",
                    "foreignField": "option_id",
                    "as": "questions.answers"
                },
            },
            // { "$unwind": { "path": "$questions.answers", "preserveNullAndEmptyArrays": true } },
            // {
            //     "$lookup": {
            //         "from": "responses",
            //         "localField": "questions.answers.responses._id",
            //         "foreignField": "response_id",
            //         "as": "questions.answers.responses"
            //     }
            // },
            {
                "$project": {
                    "createdAt": 0, "updatedAt": 0, "isActive": 0, "__v": 0,
                    "questions.createdAt": 0, "questions.updatedAt": 0, "questions.survey_id": 0, "questions.isMain": 0, "questions.__v": 0, "questions.order_number": 0, "questions.sub_question_id": 0, "questions.question_id": 0,
                    "questions.options.createdAt": 0, "questions.options.updatedAt": 0, "questions.options.question_id": 0, "questions.options.__v": 0, "questions.options.order_number": 0,
                    "questions.answers.createdAt": 0, "questions.answers.updatedAt": 0, "questions.answers.question_id": 0, "questions.answers.option_id": 0, "questions.answers.__v": 0

                }
            },
        ]);

        res.json(fetchSurvey);

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}