// src/services/registerService.js
const apiClient = require('../utils/apiClient');

const registerCompany = async (companyName, ownerName, ownerEmail, rollNo, accessCode) => {
  const response = await apiClient.post('/register', {
    companyName,
    ownerName,
    ownerEmail,
    rollNo,
    accessCode,
  });

  return response.data;
};

module.exports = { registerCompany };
