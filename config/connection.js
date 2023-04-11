const Sequelize = require('sequelize');

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  'employee_db',
  // User
  'root',
  // Password
  'ScaryWords900!',
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3001
  }
);

module.exports = sequelize;
