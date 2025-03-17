const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
}, { timestamps: true });

const Theme = mongoose.model('Theme', themeSchema);

module.exports = Theme;
