const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development.url, {
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
