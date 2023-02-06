// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config/connection
const sequelize = require('../config/connection');

// Create a new Sequelize model for ProductTag
class ProductTag extends Model {}

// Set up fields and rules for ProductTag 
ProductTag.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type:DataTypes.INTEGER,
      // REFERENCES THE product MODEL'S ID 
      refences: {
        model: 'product',
        key: 'id'      
      }
    },
    tag_id: {
      type:DataTypes.INTEGER,
      // REFERENCES THE tag MODEL'S ID
      references: {
        model: 'tag',
        key: 'id',
      }
    }
  },
  {
     // Link to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
