
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    main_question: {
        type: Object,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    mainId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'surveys'
    },
    version_number: {
        type: Number,
        default: 1,
        required: true
    }
}, { timestamps: true })