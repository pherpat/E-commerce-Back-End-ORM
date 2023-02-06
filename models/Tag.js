// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config/connection.js
const sequelize = require('../config/connection.js');

// Create a new Sequelize model for Tag
class Tag extends Model {}

// Set up fields and rules for Tag
Tag.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type:DataTypes.STRING,
    }
  },
  {
     // Link to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
