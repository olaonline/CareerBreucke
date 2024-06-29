const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  Category: {
    type: String,
    required: false,
  },
  SalaryRange: {
    min: {
      type: Number,
      required: false,
    },
    max: {
      type: Number,
      required: false,
    },
  },
  Location: {
    type: String,
    required: true
  },
  Requirements: {
    type: [String],
    required: true
  },
  employmentType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'],
    required: true,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  },
});

const JobModel = mongoose.model("Job", JobSchema);

module.exports = JobModel;