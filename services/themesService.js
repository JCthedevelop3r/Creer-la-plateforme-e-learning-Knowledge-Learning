const Theme = require("../models/Theme");

async function createTheme({
  name,
  image,
  description,
  courses,
  createdBy,
  updatedBy,
}) {
  try {
    // Création d'un nouveau thème
    const newTheme = new Theme({
      name,
      image,
      description,
      course: Array.isArray(courses) ? courses : [courses],
      created_by: createdBy,
      updated_by: updatedBy,
    });

    // Sauvegarde du thème
    await newTheme.save();

    return newTheme;
  } catch (error) {
    throw new Error("Erreur lors de la création du thème : " + error.message);
  }
}

async function getAllThemes() {
  try {
    const themes = await Theme.find()
      .populate("course") // Allows to populate the courses associated with each theme
      .populate("created_by") // Allows to populate the user who created the theme
      .populate("updated_by"); // Allows to populate the user who updated the theme

    return themes;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des thèmes : " + error.message
    );
  }
}

async function getThemeById(themeId) {
  try {
    const theme = await Theme.findById(themeId).populate("course");

    return theme;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération du thème : " + error.message
    );
  }
}

async function updateTheme(themeId, updateData) {
  try {
    const updatedTheme = await Theme.findByIdAndUpdate(themeId, updateData, {
      new: true, // returns the updated document
    });

    if (!updatedTheme) {
      throw new Error("Thème introuvable");
    }

    return updatedTheme;
  } catch (error) {
    throw new Error(
      "Erreur lors de la mise à jour du thème : " + error.message
    );
  }
}

async function deleteTheme(themeId) {
  try {
    const deletedTheme = await Theme.findByIdAndDelete(themeId);

    if (!deletedTheme) {
      throw new Error("Thème introuvable");
    }

    return deletedTheme;
  } catch (error) {
    throw new Error(
      "Erreur lors de la suppression du thème : " + error.message
    );
  }
}

async function getThemeByName(themeName) {
  try {
    const theme = await Theme.findOne({ name: themeName }).populate("course");
    if (!theme) {
      throw new Error("Thème introuvable");
    }

    return theme;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération du thème : " + error.message
    );
  }
}

module.exports = {
  createTheme,
  getAllThemes,
  getThemeById,
  updateTheme,
  deleteTheme,
  getThemeByName,
};
