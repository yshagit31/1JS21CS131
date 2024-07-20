// src/app.js
const express = require('express');
const registerRoutes = require('./routes/registerRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());
app.use('/register', registerRoutes);
app.use('/auth', authRoutes);
app.use('/categories', productRoutes);

module.exports = app;
