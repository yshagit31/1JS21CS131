// src/controllers/authController.js
const authService = require('../services/authService');

const getAuthToken = async (req, res) => {
  try {
    const { companyName, clientID, clientSecret, ownerName, ownerEmail, rollNo } = req.body;
    const token = await authService.getAuthToken(companyName, clientID, clientSecret, ownerName, ownerEmail, rollNo);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAuthToken };
