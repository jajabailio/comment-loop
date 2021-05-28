
const { Question, Option } = require('../../../../models');

exports.fetchById = async (req, res) => {
    try {
        const getQuestion = await Question.findById(req.params.id);
        if(!getQuestion) return res.status(400).json('Question not found');

        const options = await Option.find({ question_id: getQuestion._id });
        
        getQuestion._doc.options = options;
        res.json(getQuestion);
        
    } catch(err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
}