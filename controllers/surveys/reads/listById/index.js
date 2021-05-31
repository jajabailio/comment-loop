
const ObjectId = require('mongoose').Types.ObjectId;
const { Survey, Question, Option } = require('../../../../models');

exports.fetchById = async (req, res) => {
    try {
        const promises = [];

        promises.push(new Promise((resolve, reject) => {
            Survey.findById(req.params.id)
                .then(res => resolve(res))
                .catch(err => reject(err));
        }));

        promises.push(new Promise((resolve, reject) => {
            Question.findOne({ survey_id: ObjectId(req.params.id) })
                .then(res => resolve(res))
                .catch(err => reject(err));
        }))
        
        Promise.all(promises)
            .then((result) => {
                const survey = result[0];
                const question = result[1];

                if(!survey) return res.status(404).json('Survey not found');

                Option.find({ question_id: question._id }).sort('order_number')
                    .then((options) => {
                        question._doc.option = options;
                        survey._doc.question = question;

                        res.json(survey);
                    })
                    .catch((err) => {
                        console.error('error fetching options: ', err);
                        return res.status(500).json('Error fetching options');
                    })
            })
            .catch((err) => {
                console.log('Promise Error: ', err);
                return res.status(500).json('Internal Server Error');
            })

    } catch(err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
}