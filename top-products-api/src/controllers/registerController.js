// src/controllers/registerController.js
const registerService = require('../services/registerService');

const registerCompany = async (req, res) => {
  try {
    const { companyName, ownerName, ownerEmail, rollNo, accessCode } = req.body;
    const data = await registerService.registerCompany(companyName, ownerName, ownerEmail, rollNo, accessCode);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerCompany };
