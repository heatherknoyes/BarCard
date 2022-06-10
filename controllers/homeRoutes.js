const router = require("express").Router();
// This is the 'get' route
// router.get("/frontpage", async (req, res) => {
//   // Here, frontpage.html is rendered
//   res.sendFile(path.join(__dirname, "../public/html/frontpage.html"));
// });

router.get("/", (req, res) => {
  try {
    // res.render("frontpage", { logged_in: req.session.logged_in });
    res.render("frontpage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/account", (req, res) => {
  try {
    res.render("account");
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

router.get("/dashboard", (req, res) => {
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
