// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config/connection
const sequelize = require('../config/connection');

// Create a new Sequelize model for Product
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
   product_name: {
      type:DataTypes.STRING,
      allowNull: false
    }, 
    price: {
      type:DataTypes.DECIMAL,
      allowNull: false, 
      // VALIDATES THAT THE VALUE IS NUMERIC
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type:DataTypes.INTEGER,
      allowNull: false, 
      // set a default value of 10
      defaultValue: 10,
      //  validates that the value is numeric
      validate: {
        isDecimal: true
      }
    },
    category_id: {
      type:DataTypes.INTEGER,
      //references the category model's id 
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    // Link to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
