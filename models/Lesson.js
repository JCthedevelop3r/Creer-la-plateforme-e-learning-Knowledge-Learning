const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    textContent: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String, // Stores the video URL or video file path
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }
}, { timestamps: true });

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
