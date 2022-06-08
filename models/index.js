const User = require("./User");
const Drink = require("./Drink");
const Review = require("./Review");
const Liquid = require("./Liquid");

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

module.exports = { User, Drink, Review, Liquid };
