const { Review } = require("../../models");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const { review_content, drink_id } = req.body;

    const drinkData = await Review.create({
      comment: review_content,
      drink_id,
      stars: 5,
      user_id: req.session.user_id,
    });

    res.status(200).json({ drinkData });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
