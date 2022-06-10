const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const postRoutes = require('./postRoutes');
const reviewRoutes = require("./reviewRoutes");

router.use("/users", userRoutes);
// router.use('/posts', postRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
