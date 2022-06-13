const router = require("express").Router();
const { Liquid, Drink, Mixing } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const { drink_name, instructions, is_alcoholic, liquid_ids } = req.body;
    if (liquid_ids.length === 0) {
      throw new Error("Must select a drink type");
    }

    const drinkData = await Drink.create({
      drink_name,
      instructions,
      is_alcoholic,
      userId: req.session.user_id,
    });

    if (drinkData) {
      liquid_ids.forEach(async (liquid_id) => {
        await Mixing.create({
          drink_id: drinkData.dataValues.id,
          liquid_id,
        });
      });
    }

    res.status(200).json({ drinkData });
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
