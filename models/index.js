const User = require("./User");
const Drink = require("./Drink");
const Review = require("./Review");
const Liquid = require("./Liquid");
const Mixing = require("./Mixing");

User.hasMany(Drink, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Drink.hasMany(Review, {
  foreignKey: "drink_id",
  onDelete: "CASCADE",
});

Drink.hasMany(Mixing, {
  foreignKey: "drink_id",
  onDelete: "CASCADE",
});

Drink.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Liquid.belongsTo(Mixing, {
  foreignKey: "liquid_id",
  onDelete: "CASCADE",
});

Drink.belongsTo(Mixing, {
  foreignKey: "drink_id",
  onDelete: "CASCADE",
});

module.exports = { User, Drink, Review, Liquid, Mixing };
