
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    survey_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'surveys',
        required: true
    },
    response_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'responses',
        required: true
    },
    question_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'questions',
        required: true
    },
    question: {
        type: String,
        required: true
    },
    option_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'options',
        required: true
    },
    option: {
        type: String,
        required: true
    }
}, { timestamps: true });