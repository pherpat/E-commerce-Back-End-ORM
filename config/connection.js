const Sequelize = require('sequelize');
require('dotenv').config();

//  Create a connection object
// What is JAWSDB_URL?
// const sequelize = process.env.JAWSDB_URL? 
// new Sequelize(process.env.JAWSDB_URL:
const sequelize = new Sequelize(
  // Database name
    process.env.DB_NAME, 
  // User
    process.env.DB_USER, 
  // Password
    process.env.DB_PW, 
    {
      // Database location
      host: 'localhost',
      dialect: 'mysql',
      // What is this?
      // dialectOptions: {
      //   decimalNumbers: true,
      // },
      port: 3306
    });

module.exports = sequelize;
