require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};

// module.exports = {
//     HOST: process.env.DB_HOST || 'localhost',
//     USER: process.env.DB_USER || 'postgres',
//     PASSWORD: process.env.DB_PASSWORD || 'yourpassword',
//     DB: process.env.DB_NAME || 'umrah_db',
//     dialect: 'postgres',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };