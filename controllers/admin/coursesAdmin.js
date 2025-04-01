const coursesService = require("../../services/coursesService");
const Course = require("../../models/Course");

async function createCourse(req, res) {
  try {
    const { name, image, price, theme } = req.body;

    const newCourse = await coursesService.createCourse({
      name,
      image,
      price,
      theme,
    });

    res.status(201).json(newCourse);
  } catch (error) {
    console.error("Erreur lors de la création d'un cursus :", error.message);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function getAllCourses(req, res) {
  try {
    const courses = await coursesService.getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    console.error("Erreur lors de la récupération des cursus :", error.message);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function updateCourse(req, res) {
  try {
    const { courseId } = req.params;
    const { name, image, price } = req.body;

    const updatedCourse = await coursesService.updateCourse(courseId, {
      name,
      image,
      price,
    });

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
    const { courseId } = req.params;

    const deletedCourse = await coursesService.deleteCourse({ courseId });

    res.status(200).json({
      message: "Cursus supprimé avec succès !",
      courseId: deletedCourse._id,
    });
  } catch (error) {
    console.error("Erreur lors de la suppression d'un cursus :", error.message);

    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

async function getCourseByName(req, res) {
  const courseName = req.params["courseName"];
  try {
    const course = await Course.findOne({ name: courseName }).populate(
      "lesson"
    );

    if (!course) {
      return res.status(404).json({ message: "Cursus non trouvé" });
    }

    res.json(course);
  } catch (error) {
    console.error("Erreur serveur :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
}

module.exports = {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getCourseByName,
};
