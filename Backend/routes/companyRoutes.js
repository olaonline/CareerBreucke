const express = require("express");
const router = express.Router();
const companyController = require("../controllers/CompanyController");

router.get('/', companyController.company_index)
router.post('/',companyController.company_create_post)
router.post('/details',companyController.company_details)
router.post('/:_id',companyController.company_delete)

module.exports = router;