// const lessonsService = require('../services/lessonsService');

async function createLessons(req, res) {
  try {
    const { title, image, description, textContent, price } = req.body;

    // const newLesson = await lessonsService.createLesson({ title, image, description, textContent, price });

    res.status(201).json(newLesson);
  } catch (error) {
    console.error("Erreur lors de la création d'une leçon :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function getAllLessons(req, res) {
  try {
    // const lessons = await lessonsService.getAllLessons();

    res.status(200).json(lessons);
  } catch (error) {
    console.error("Erreur lors de la récupération des leçons :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function updateLessons(req, res) {
  try {
    const { title, image, description, textContent, price } = req.body;

    // const updatedLesson = await lessonsService.updateLesson({ title, image, description, textContent, price });

    res.status(201).json(updatedLesson);
  } catch (error) {
    console.error(
      "Erreur lors de la modification d'une leçon :",
      error.message
    );

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function deleteLessons(req, res) {
  try {
    const { title } = req.body;

    // const deletedLesson = await lessonsService.deleteLesson({ title });

    res.status(201).json(deletedLesson);
  } catch (error) {
    console.error("Erreur lors de la suppression d'une leçon :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}
