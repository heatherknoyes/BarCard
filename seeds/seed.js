const sequelize = require("../config/connection");
const { Drink } = require("../models");

const drinkData = require("./drinkData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (const drink of drinkData) {
    await Drink.create({
      ...drink,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
