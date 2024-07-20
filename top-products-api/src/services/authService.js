// src/services/authService.js
const apiClient = require('../utils/apiClient');

const getAuthToken = async (companyName, clientID, clientSecret, ownerName, ownerEmail, rollNo) => {
  const response = await apiClient.post('/auth', {
    companyName,
    clientID,
    clientSecret,
    ownerName,
    ownerEmail,
    rollNo,
  });

  return response.data;
};

module.exports = { getAuthToken };
