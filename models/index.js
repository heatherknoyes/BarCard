const User = require("./User");
const Drink = require("./Drink");
const Review = require("./Review");
const Liquid = require("./Liquid");
const Mixing = require("./Mixing");

User.hasMany(Drink, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(Review, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Drink.hasMany(Review, {
  foreignKey: "drinkId",
  onDelete: "CASCADE",
});

Drink.hasMany(Mixing, {
  foreignKey: "drinkId",
  onDelete: "CASCADE",
});

Drink.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Liquid.hasMany(Mixing, {
  foreignKey: "liquidId",
  onDelete: "CASCADE",
});

module.exports = { User, Drink, Review, Liquid, Mixing };
