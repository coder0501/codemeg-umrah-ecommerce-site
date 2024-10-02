const app = require('./app');
const sequelize = require('./models/index');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}); 


















// const express = require('express');
// const dotenv = require('dotenv');
// // const userRoutes = require('./routes/userRoutes');
// const pool = require('./config/db');
// const fs = require('fs');
// const path = require('path');

// dotenv.config();

// const app = express();
// app.use(express.json());

// // Apply user routes
// // app.use('/api', userRoutes);

// // Load the SQL schema file and execute it
// const schemaPath = path.join(__dirname, 'schemas', 'userSchema.sql');
// const schemaSQL = fs.readFileSync(schemaPath, 'utf8');

// pool.query(schemaSQL)
//   .then(() => console.log('Schema created'))
//   .catch((err) => console.error('Error creating schema:', err));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


