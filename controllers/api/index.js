const router = require("express").Router();
const userRoutes = require("./userRoutes");
const drinkRoutes = require("./drinkRoutes");
const reviewRoutes = require("./reviewRoutes");

router.use("/users", userRoutes);
router.use("/drinks", drinkRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
