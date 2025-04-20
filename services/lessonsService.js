const Lesson = require("../models/Lesson");

async function createLesson(lessonData) {
  try {
    const newLesson = new Lesson(lessonData);
    await newLesson.save();
    return newLesson;
  } catch (error) {
    throw new Error(
      "Erreur lors de la création de la leçon : " + error.message
    );
  }
}

async function getAllLessons() {
  try {
    const lessons = await Lesson.find()
      .populate("course") // Retrieve associated course details
      .populate("created_by") // Retrieve details of the user who created the lesson
      .populate("updated_by"); // Retrieve details of the user who updated the lesson

    return lessons;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des leçons : " + error.message
    );
  }
}

async function getLessonById(lessonId) {
  try {
    const lesson = await Lesson.findById(lessonId);

    if (!lesson) {
      throw new Error("Leçon non trouvée");
    }

    return lesson;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération de la leçon : " + error.message
    );
  }
}

async function updateLesson(lessonId, updateData) {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(lessonId, updateData, {
      new: true,
    });

    if (!updatedLesson) {
      throw new Error("Leçon introuvable");
    }

    return updatedLesson;
  } catch (error) {
    throw new Error(
      "Erreur lors de la mise à jour de la leçon : " + error.message
    );
  }
}

async function deleteLesson(lessonId) {
  try {
    const deletedLesson = await Lesson.findByIdAndDelete(lessonId);

    if (!deletedLesson) {
      throw new Error("Leçon introuvable");
    }

    return deletedLesson;
  } catch (error) {
    throw new Error(
      "Erreur lors de la suppression de la leçon : " + error.message
    );
  }
}

module.exports = {
  createLesson,
  getAllLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
};
