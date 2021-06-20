
const { Survey } = require('../../../../models');
exports.fetchSurveyList = async (req, res) => {
    try {

        const surveys = await Survey.find({ isActive: true }).select('-main_question');

        return surveys;

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}