
const { Option } = require('../../../../models');

exports.deleteOptionById = async (req, res) => {
    try {
        await Option.deleteOne({ _id: req.params.id });
        res.json("Option deleted");
    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}