
const { Response } = require('../../../../models');

exports.fetchById = async (req, res) => {
    try {

        const fetchResponse = await Response.findById(req.params.id);
        if(!fetchResponse) return res.status(400).json('Response not found');

        res.json(fetchResponse);

    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}