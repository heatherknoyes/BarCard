const router = require("express").Router();
const withAuth = require("../utils/auth.js")
// This is the 'get' route
// router.get("/frontpage", async (req, res) => {
//   // Here, frontpage.html is rendered
//   res.sendFile(path.join(__dirname, "../public/html/frontpage.html"));
// });

router.get("/", (req, res) => {
  try {
    res.render("frontpage");
    // res.sendFile(path.join(__dirname, "../public/html/mainpage.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is the 'get' route
// router.get("/mainpage", async (req, res) => {
//   // Here, mainpage.html is rendered
//   res.sendFile(path.join(__dirname, "../public/html/mainpage.html"));
// });

module.exports = router;
