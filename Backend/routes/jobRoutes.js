const express = require("express");
const router = express.Router();
const JobController = require("../controllers/JobController");

router.get('/', JobController.job_index)
router.post('/',JobController.job_create_post)
router.post('/details',JobController.job_details)
router.post('/:_id',JobController.job_delete)

module.exports = router;