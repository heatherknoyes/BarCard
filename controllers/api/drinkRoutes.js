const router = require("express").Router();
const { Liquid } = require("../../models");

router.post("/ingredient", async (req, res) => {
  try {
    console.log(req.body);
    const liquidData = await Liquid.create({
      ...req.body,
    });

    res.status(200).json(liquidData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
