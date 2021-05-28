
const { Question } = require('../../../../models');

exports.updateQuestionDetails = async (req, res) => {
    
    //TODO: Add validation

    try {
        await Question.updateOne({ _id: req.params.id }, { $set: req.body })
            .then(() => res.json('Question details updated'));
    } catch(err) {
        console.error(err);
        return res.status(500).json('Internal Server Error');
    }
}