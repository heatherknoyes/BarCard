const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Mixing extends Model {}

Mixing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    liquid_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "liquid",
        key: "id",
      },
    },
    drink_id: {
      type: DataTypes.STRING,
      references: {
        model: "drink",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "mixing",
  }
);

module.exports = Mixing;
