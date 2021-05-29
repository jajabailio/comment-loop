
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    survey_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'surveys'
    },
    isMain: {
        type: Boolean,
        required: true,
        default: false
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true });