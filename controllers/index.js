const router = require("express").Router();

const apiRoutes = require("./api");
const frontPage = require("./frontpage");

router.use("/", frontPage);
router.use("/api", apiRoutes);

module.exports = router;


// const 
//
//
// router.use("/", )
//
//
