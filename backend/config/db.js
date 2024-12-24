const { Sequelize } = require('sequelize');

// Sequelize instance configuration
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,  // Default MySQL port
    dialect: 'mysql',
    dialectOptions: {
      // Optional SSL configuration if required
      // ssl: { require: true, rejectUnauthorized: false }
    },
    logging: false, // Disable Sequelize logging (optional)
  }
);

module.exports = sequelize;