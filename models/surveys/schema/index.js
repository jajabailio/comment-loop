
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    isActive: {
        type: Boolean,   
    }
}, { timestamps: true })