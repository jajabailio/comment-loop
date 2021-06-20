//TODO make a find survey by getting the main Id and the isActive
const { ObjectId } = require('mongodb');
const { Survey } = require('../../../../models');

exports.fetchById = async (req, res) => {

    try {

        const mainId = ObjectId(req.params.id);
        const getSurvey = await Survey.findOne({ mainId: mainId, isActive: true });
        if (!getSurvey) return res.status(400).json('Question not found');

        res.json(getSurvey);

    } catch (err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
}