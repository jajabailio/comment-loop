
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
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
    option_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'options',
        required: true
    },
}, { timestamps: true });