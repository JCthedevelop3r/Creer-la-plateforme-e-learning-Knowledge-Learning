// const themeService = require('../services/themeService');

async function createTheme(req, res) {
  try {
    const { name, image, description } = req.body;

    // const newTheme = await themeService.createTheme({ name, image, description });

    res.status(201).json(newTheme);
  } catch (error) {
    console.error("Erreur lors de la création d'un thème :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function getAllThemes(req, res) {
  try {
    // const themes = await themeService.getAllThemes();
    res.status(200).json(themes);
  } catch (error) {
    console.error("Erreur lors de la récupération des thèmes :", error.message);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function updateTheme(req, res) {
  try {
    const { name, image, description } = req.body;

    // const updatedTheme = await themeService.updateTheme({ name, image, description });

    res.status(200).json(updatedTheme);
  } catch (error) {
    console.error("Erreur lors de la modification d'un thème :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function deleteTheme(req, res) {
  try {
    const { name } = req.body;

    // const deletedTheme = await themeService.deleteTheme({ name });

    res.status(200).json({ message: "Thème supprimé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la suppression d'un thème :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

module.exports = {
  createTheme,
  updateTheme,
};
