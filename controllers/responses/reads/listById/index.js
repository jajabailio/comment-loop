
const { Response } = require('../../../../models');
const ObjectId = require('mongoose').Types.ObjectId;

exports.fetchById = async (req, res) => {
    try {

        const fetchResponse = await Response.findById(req.params.id);
        if (!fetchResponse) return res.status(404).json("Response was not found");

        res.json(fetchResponse);

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}


/*
const fetchResponse = await Response.aggregate([
            { "$match": { _id: ObjectId(req.params.id) }},
            {
                "$lookup": {
                    "from": "answers",
                    "localField": "_id",
                    "foreignField": "response_id",
                    "as": "answers"

                }
            },
            { "$unwind": { "path": "$answers", "preserveNullAndEmptyArrays": true} },
            {
                "$lookup": {
                    "from": "questions",
                    "localField": "question_id",
                    "foreignField": "answers.question_id",
                    "as": "answers.question"
                }
            },
            {
                "$addFields": {
                    "answers.question": {
                        "$arrayElemAt": [
                            {
                                "$filter": {
                                    "input": "$answers.question",
                                    "as": "quest",
                                    "cond": {
                                        "$eq": [ "$$quest._id", "$answers.question_id"]
                                    }
                                }
                            }, 0
                        ]
                    }
                }
            },
            {
                "$lookup": {
                    "from": "options",
                    "localField": "option_id",
                    "foreignField": "answers.question_id",
                    "as": "answers.option"
                }
            },
            {
                "$addFields": {
                    "answers.option": {
                        "$arrayElemAt": [
                            {
                                "$filter": {
                                    "input": "$answers.option",
                                    "as": "opt",
                                    "cond": {
                                        "$eq": [ "$$opt._id", "$answers.option_id"]
                                    }
                                }
                            }, 0
                        ]
                    }
                }
            },
            { "$project": {
                "createdAt": 0, "updatedAt": 0, "isActive": 0,
                "questions.createdAt": 0, "questions.updatedAt": 0,
                "questions.options.createdAt": 0, "questions.options.updatedAt": 0,
                "questions.options.answers.createdAt": 0, "questions.options.answers.updatedAt": 0

            }},
        ])
*/