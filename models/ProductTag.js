const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    productTag_id: {
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
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;