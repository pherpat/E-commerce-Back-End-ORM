// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // The onDelete('cascade') means that when the row is deleted, it will delete all it's references and attached data too.
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreingKey: 'category_id',
  onDelete: 'SET NULL',
});

// Products belongToMany Tags (through ProductTag)
Products.belongToMany(Tag,{
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,  {
  through:ProductTag,
  foreingKey: 'tag_id',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
