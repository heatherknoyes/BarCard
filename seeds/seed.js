const sequelize = require("../config/connection");
const { User, Drink, Review, Liquid, Mixing } = require("../models");

const drinkData = require("./drinkData.json");
const userData = require("./userData.json");
const reviewData = require("./reviewData.json");
const liquidData = require("./liquidData.json");
const mixingData = require("./mixingData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const liquid of liquidData) {
    await Liquid.create({
      ...liquid,
    });
  }

  for (const drink of drinkData) {
    await Drink.create({
      ...drink,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const mix of mixingData) {
    await Mixing.create({
      ...mix,
    });
  }

  const drinks = await Drink.findAll();

  for (const review of reviewData) {
    await Review.create({
      ...review,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      drink_id: drinks[Math.floor(Math.random() * drinks.length)].dataValues.id,
    });
  }

  process.exit(0);
};

seedDatabase();
