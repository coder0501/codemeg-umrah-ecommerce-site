const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

module.exports = app;






