
const mongoose = require('mongoose');
const SchemaTypes = mongoose.SchemaTypes;

module.exports = new mongoose.Schema({
    question_id: {
        type: SchemaTypes.ObjectId,
        ref: 'questions'
    },
    text: {
        type: String,
        required: true
    },
    image_url: {
        type: String
    },
    order_number: {
        type: Number
    },
    sub_question_id: {
        type: SchemaTypes.ObjectId,
        ref: 'questions'
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})