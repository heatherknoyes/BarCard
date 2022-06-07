const User = require("./User");
const Drink = require("./Drink");

User.hasMany(Drink, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = { User, Drink };
