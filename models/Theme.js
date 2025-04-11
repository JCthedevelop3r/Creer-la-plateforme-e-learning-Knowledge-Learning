const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    course: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
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

themeSchema.pre("save", function (next) {
  if (this.isModified("course")) {
    this.certified = this.course.every((c) => c.certified); // The theme is certified if all the courses are certified
  }
  next();
});

const Theme = mongoose.model("Theme", themeSchema);

module.exports = Theme;
