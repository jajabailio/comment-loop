
const { Question, Option } = require('../../../../models');

exports.deleteQuestionById = async (req, res) => {

    if(!req.params.id) return res.status(400).json('No question selected');

    try {
        const promises = [];

        promises.push(new Promise((resolve, reject) => {
            Question.deleteOne({ _id: req.params.id })
                .then((res) => resolve(res))
                .catch(err => reject(err));
        }));

        promises.push(new Promise((resolve, reject) => {
            Option.deleteMany({ question_id: req.params.id })
                .then((res) => resolve(res))
                .catch(err => reject(err));
        }));

        Promise.all(promises)
            .then(() => {
                return res.json('Question deleted');
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).json('Internal Server Error');
            })

    } catch(err) {
        console.error(err);
        return res.status(500).json('Internal Server Error');
    }
}