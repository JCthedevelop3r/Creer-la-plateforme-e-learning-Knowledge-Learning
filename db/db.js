const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Utiliser le parser URL de MongoDB
            useUnifiedTopology: true, // Utiliser le moteur de topologie unifiée
        });
        console.log('MongoDB connecté avec succès');
    } catch (err) {
        console.error('Erreur de connexion à MongoDB:', err);
        process.exit(1); // Arrêter l'application en cas d'échec de la connexion
    }
};

module.exports = connectDB;
