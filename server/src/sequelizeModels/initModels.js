const DataTypes = require("sequelize").DataTypes;
const _masterEntities = require("./masterEntities");
const _products = require("./products");
const _masterProducts = require("./masterProducts");

function initModels(sequelize) {

  const MasterEntities = _masterEntities(sequelize, DataTypes);
  const Products = _products(sequelize, DataTypes);
  const MasterProducts = _masterProducts(sequelize, DataTypes);
  
  MasterProducts.hasMany(Products, {
    foreignKey: 'productId',
    sourceKey: 'id',
    as: 'masterProduct'
  });

  return {
    MasterEntities,
    Products,
    MasterProducts
  };

}

module.exports = initModels;
