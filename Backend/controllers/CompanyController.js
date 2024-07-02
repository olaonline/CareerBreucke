const companyModel = require("../models/companyModel");

// get all the companies
const company_index = async (req, res) => {
  try {
    const Allcompanys = await companyModel.find();
    res.send(Allcompanys);
  } catch (err) {
    res.send({ msg: err.message });
  }
};

// get a single company
const company_details = async (req, res) => {
  const _id = req.body._id;
  try {
    const company = await companyModel.findById(_id);
    if(!company){
      res.status(404).send({msg: "company not found"})
    }
    res.status(200).send(company);
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

// send back the form
const company_create_get = async (req, res) => {};

// add a new company
const company_create_post = async (req, res) => {
  try {
    const newcompany = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      logo: req.body.logo,
      sector: req.body.sector,
      type: req.body.type,
      location: req.body.location,
      founded: req.body.founded,
    };
    await companyModel.create(newcompany);
    res.send(newcompany);
  } catch (err) {
    res.send({ msg: err.message });
  }
};

// delete a company
const company_delete = async (req, res) => {
  const _id = req.params._id;
  try {
    const result = await companyModel.deleteOne({ _id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: "company not found" });
    }
    res.status(200).json({ msg: "Deleted!" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  company_index,
  company_details,
  company_create_get,
  company_create_post,
  company_delete,
};