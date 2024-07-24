const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');

// GET /leave/:id - Get leave details by ID
router.get('/:id', leaveController.getLeaveById);

// POST /leave/create - Create a new leave request
router.post('/create', leaveController.createLeaveRequest);

module.exports = router;
