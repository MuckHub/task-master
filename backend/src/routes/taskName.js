const express = require('express');

const router = express.Router();
const taskNameController = require('../controllers/taskName-controller');

router.post('/', taskNameController.getTaskName);


module.exports = router;
