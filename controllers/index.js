const router = require("express").Router();
const path = require("path");
// const apiRoutes = require("./api");
// const homeRoutes = require("./homeRoutes");

// router.use("/", homeRoutes);
// router.use("/api", apiRoutes);

// This is the 'get' route 
router.get('/frontpage', async (req, res) => {
  // Here, frontpage.html is rendered
  res.sendFile(path.join(__dirname, '../public/html/frontpage.html'));
});

// This is the 'get' route 
router.get('/login', async (req, res) => {
  // Here, login.html is rendered
  res.sendFile(path.join(__dirname, '../public/html/login.html'));
});

// This is the 'get' route 
router.get('/mainpage', async (req, res) => {
  // Here, mainpage.html is rendered
  res.sendFile(path.join(__dirname, '../public/html/mainpage.html'));
});

module.exports = router;
