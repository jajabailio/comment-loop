
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    isActive: {
        type: Boolean,   
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