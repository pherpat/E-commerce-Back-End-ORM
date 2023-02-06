// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config/connection.js
const sequelize = require('../config/connection.js');

// Create a new Sequelize model for Category
class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Link to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);


module.exports = Category;