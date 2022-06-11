const router = require("express").Router();
const { Liquid, Drink, Mixing } = require("../../models");

router.post("/", async (req, res) => {
  try {
    let mixData;
    const { drink_name, instructions, is_alcoholic, liquid_id } = req.body;
    const drinkData = await Drink.create({
      drink_name,
      instructions,
      is_alcoholic,
      userId: req.session.user_id,
    });

    if (drinkData) {
      mixData = await Mixing.create({
        drink_id: drinkData.dataValues.id,
        liquid_id,
      });
    }

    res.status(200).json({ drinkData, mixData });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/ingredient", async (req, res) => {
  try {
    const liquidData = await Liquid.create({
      ...req.body,
    });

    res.status(200).json(liquidData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
