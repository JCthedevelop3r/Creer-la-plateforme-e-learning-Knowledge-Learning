const lessonsService = require("../services/lessonsService");

async function createLesson(req, res) {
  try {
    const { title, image, description, textContent, price, course } = req.body;

    const newLesson = await lessonsService.createLesson({
      title,
      image,
      description,
      textContent,
      price,
      course,
    });

    res.status(201).json(newLesson);
  } catch (error) {
    console.error("Erreur lors de la création d'une leçon :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function getAllLessons(req, res) {
  try {
    const lessons = await lessonsService.getAllLessons();

    res.status(200).json(lessons);
  } catch (error) {
    console.error("Erreur lors de la récupération des leçons :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function updateLesson(req, res) {
  try {
    const { lessonId } = req.params;
    const { title, image, description, textContent, price, course } = req.body;

    const updatedLesson = await lessonsService.updateLesson(lessonId, {
      title,
      image,
      description,
      textContent,
      price,
      course,
    });

    res.status(201).json(updatedLesson);
  } catch (error) {
    console.error(
      "Erreur lors de la modification d'une leçon :",
      error.message
    );

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function deleteLesson(req, res) {
  try {
    const { lessonId } = req.params;

    const deletedLesson = await lessonsService.deleteLesson({ lessonId });

    res.status(201).json({ message: "Leçon supprimée avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la suppression d'une leçon :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

module.exports = {
  createLesson,
  getAllLessons,
  updateLesson,
  deleteLesson,
};
