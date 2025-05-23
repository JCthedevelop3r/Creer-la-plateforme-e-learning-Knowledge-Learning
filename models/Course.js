const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    theme: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Theme", required: true },
    ],
    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    purchased: {
      type: Boolean,
      default: false,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    certified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

courseSchema.pre("save", function (next) {
  if (this.isModified("lessons")) {
    this.certified = this.lessons.every((l) => l.certified); // The course is certified if all the lessons are certified
  }
  next();
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
