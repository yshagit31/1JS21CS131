// src/utils/apiClient.js
const axios = require('axios');
const { BASE_URL } = require('./config');

const apiClient = axios.create({
  baseURL: BASE_URL,
});

module.exports = apiClient;
