
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
    }
}, { timestamps: true })