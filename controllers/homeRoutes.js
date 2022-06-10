const router = require("express").Router();
const withAuth = require("../utils/auth.js");

router.get("/", (req, res) => {
  try {
    res.render("frontpage", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/account", (req, res) => {
  try {
    res.render("account", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newrecipe", (req, res) => {
  try {
    res.render("newrecipe", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newingredient", (req, res) => {
  try {
    res.render("newingredient", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", (req, res) => {
  try {
    res.render("search", { logged_in: req.session.logged_in });
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

module.exports = router;
