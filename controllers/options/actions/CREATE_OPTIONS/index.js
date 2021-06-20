
const { Option, Question } = require('../../../../models');

exports.createOptions = async (req, res) => {

    const { options } = req.body;
    try {

        const getQuestion = await Question.findById(req.params.question_id);
        if (!getQuestion) return res.status(400).json('Question not found');

        if (options.length < 1) return res.status(400).json('No options to create');

        const mapOptions = options.map((opt) => ({ ...opt, question_id: getQuestion._id }));
        const newOptions = await Option.insertMany(mapOptions);

        res.json(newOptions);

    } catch (err) {
        console.error(err);
        return res.status(500).json('Internal Server Error');
    }
}