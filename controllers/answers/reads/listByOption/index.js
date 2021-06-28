
const { ObjectId } = require('mongoose').Types;
const { Answer } = require('../../../../models');

exports.fetchOptionResponses = async (req, res) => {
    
    try {

        const fetchResponse = await Answer.aggregate([
            { "$match": { option_id: ObjectId(req.params.option_id) }},
            {
                "$lookup": {
                    "from": "responses",
                    "localField": "response_id",
                    "foreignField": "_id",
                    "as": "commentedBy"
                }
            },
            { "$unwind": { "path": "$commentedBy", "preserveNullAndEmptyArrays": true } },
            {
                "$project": {
                    "createdAt": 0, "updatedAt": 0, "isActive": 0, "__v": 0, "response_id": 0, "option_id": 0,
                    "commentedBy.survey_id": 0, "commentedBy.createdAt": 0, "commentedBy.updatedAt": 0, "commentedBy.__v": 0, "commentedBy.answers": 0
                    
                }
            },
        ]);

        res.json(fetchResponse);

    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}