const themesService = require("../services/themesService");

async function createTheme(req, res) {
  try {
    const { name, image, description } = req.body;
    const createdBy = req.userId;
    const updatedBy = req.userId;

    const newTheme = await themesService.createTheme({
      name,
      image,
      description,
      createdBy,
      updatedBy,
    });

    res.status(201).json(newTheme);
  } catch (error) {
    console.error("Erreur lors de la création d'un thème :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function getAllThemes(req, res) {
  try {
    const themes = await themesService.getAllThemes();
    res.status(200).json(themes);
  } catch (error) {
    console.error("Erreur lors de la récupération des thèmes :", error.message);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function updateTheme(req, res) {
  try {
    const { themeId } = req.params;
    const { name, image, description } = req.body;

    const updatedTheme = await themesService.updateTheme(themeId, {
      name,
      image,
      description,
    });

    res.status(200).json(updatedTheme);
  } catch (error) {
    console.error("Erreur lors de la modification d'un thème :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function deleteTheme(req, res) {
  try {
    const { themeId } = req.params;

    const deletedTheme = await themesService.deleteTheme({ themeId });

    res
      .status(200)
      .json({
        message: "Thème supprimé avec succès !",
        themeId: deletedTheme._id,
      });
  } catch (error) {
    console.error("Erreur lors de la suppression d'un thème :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

module.exports = {
  createTheme,
  getAllThemes,
  updateTheme,
  deleteTheme,
};
