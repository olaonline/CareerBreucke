const JobModel = require("../models/jobModel");

// get all the jobs
const job_index = async (req, res) => {
  try {
    const AllJobs = await JobModel.find();
    res.send(AllJobs);
  } catch (err) {
    res.send({ msg: err.message });
  }
};

// get a single job
const job_details = async (req, res) => {
  const _id = req.body._id;
  try {
    const Job = await JobModel.findById(_id);
    if(!Job){
      res.status(404).send({msg: "Job not found"})
    }
    res.status(200).send(Job);
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

// send back the form
const job_create_get = async (req, res) => {};

// add a new job
const job_create_post = async (req, res) => {
  try {
    const newJob = {
      title: req.body.title,
      Description: req.body.Description,
      Company_id: req.body.Company_id,
      Category: req.body.Category,
      SalaryRange: req.body.SalaryRange,
      Location: req.body.Location,
      Requirements: req.body.Requirements,
      employmentType: req.body.employmentType,
    };
    await JobModel.create(newJob);
    res.send(newJob);
  } catch (err) {
    res.send({ msg: err.message });
  }
};

// delete a job
const job_delete = async (req, res) => {
  const _id = req.params._id;
  try {
    const result = await JobModel.deleteOne({ _id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: "Job not found" });
    }
    res.status(200).json({ msg: "Deleted!" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  job_index,
  job_details,
  job_create_get,
  job_create_post,
  job_delete,
};