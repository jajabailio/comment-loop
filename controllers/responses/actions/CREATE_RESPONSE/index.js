
const { Response } = require('../../../../models');

exports.createNewResponse = async (req, res) => {

    try {

        const { error } = Response.createValidate(req.body);
        if (error) return res.status(400).json(error.details[0].message);

        const validateQuestions = Response.validateQuestions(req.body.survey);
        req.body.survey = validateQuestions;

        const response = await Response.create(req.body);
        res.json(response);

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

}