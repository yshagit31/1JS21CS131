// src/routes/authRoutes.js
const express = require('express');
const { getAuthToken } = require('../controllers/authController');

const router = express.Router();

router.post('/', getAuthToken);

module.exports = router;
