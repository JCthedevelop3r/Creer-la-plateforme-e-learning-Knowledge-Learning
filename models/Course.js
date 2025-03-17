const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    theme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theme',
        required: true
    },
    lesson: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecon'
    }]
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
