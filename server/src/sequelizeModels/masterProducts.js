const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return MasterProducts.init(sequelize, DataTypes);
}

class MasterProducts extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      code: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      brand: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      category: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
    }, {
      sequelize,
      tableName: 'master_products',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
    return MasterProducts;
  }
}
