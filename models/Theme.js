const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    cursus: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cursus'
    }]
}, { timestamps: true });

const Theme = mongoose.model('Theme', themeSchema);

module.exports = Theme;
