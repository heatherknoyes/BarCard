const router = require("express").Router();
const { Liquid, Drink } = require("../../models");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const drinkData = await Drink.create({
      ...req.body,
    });

    res.status(200).json(drinkData);
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

// router.get("/ingredient", async (req, res) => {
//   try {
//     const liquidData = await Liquid.findAll();

//     res.status(200).json(liquidData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;
