const Course = require("../models/Course");

async function createCourse(courseData) {
  try {
    const newCourse = new Course(courseData);
    await newCourse.save();
    return newCourse;
  } catch (error) {
    throw new Error("Erreur lors de la création du cursus : " + error.message);
  }
}

async function getAllCourses() {
  try {
    const courses = await Course.find()
      .populate("theme") // Retrieve the information of the associated theme
      .populate("lesson") // Retrieve the lessons associated with the course
      .populate("created_by") // Retrieve the info of the user who created the course
      .populate("updated_by"); // Retrieve the info of the user who updated the course

    return courses;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des cursus : " + error.message
    );
  }
}

async function updateCourse(courseId, updateData) {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, {
      new: true, // Returns the updated document
    });

    if (!updatedCourse) {
      throw new Error("Cursus introuvable");
    }

    return updatedCourse;
  } catch (error) {
    throw new Error(
      "Erreur lors de la mise à jour du cursus : " + error.message
    );
  }
}

async function deleteCourse(courseId) {
  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      throw new Error("Cursus introuvable");
    }

    return deletedCourse;
  } catch (error) {
    throw new Error(
      "Erreur lors de la suppression du cursus : " + error.message
    );
  }
}

module.exports = {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
};
