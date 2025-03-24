// const coursesService = require('../services/coursesService');

async function createCourse(req, res) {
  try {
    const { name, image, price } = req.body;

    // const newCourse = await coursesService.createCourse({ name, image, price });

    res.status(201).json(newCourse);
  } catch (error) {
    console.error("Erreur lors de la création d'un cursus :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function getAllCourses(req, res) {
  try {
    // const courses = await coursesService.getAllCourses();

    res.status(200).json(courses);
  } catch (error) {
    console.error("Erreur lors de la récupération des cursus :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function updateCourse(req, res) {
  try {
    const { name, image, price } = req.body;

    // const updatedCourse = await coursesService.updateCourse({ name, image, price });

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error(
      "Erreur lors de la modification d'un cursus :",
      error.message
    );

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function deleteCourse(req, res) {
  try {
    const { name } = req.body;

    // const deletedCourse = await coursesService.deleteCourse({ name });

    res.status(200).json(deletedCourse);
  } catch (error) {
    console.error("Erreur lors de la suppression d'un cursus :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

module.exports = {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
};
