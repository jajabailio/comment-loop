
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    survey_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'surveys',
        required: true
    },
    questions: {
        type: Object,
        required: true
    },
    email: {
        type: String
    },
    contact_number: {
        type: String
    }
})