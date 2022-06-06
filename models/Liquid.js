const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Liquid extends Model {}

Liquid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      serving_size_oz: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_alcohol: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'liquid',
  }
);

module.exports = Liquid;