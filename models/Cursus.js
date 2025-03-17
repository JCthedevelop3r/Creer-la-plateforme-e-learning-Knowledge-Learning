const mongoose = require('mongoose');

const cursusSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    theme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theme',
        required: true
    },
    lecons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecon'
    }]
}, { timestamps: true });

const Cursus = mongoose.model('Cursus', cursusSchema);

module.exports = Cursus;
