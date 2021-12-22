const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return MasterEntities.init(sequelize, DataTypes);
}

class MasterEntities extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
    }, {
      sequelize,
      tableName: 'master_entities',
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
    return MasterEntities;
  }
}
