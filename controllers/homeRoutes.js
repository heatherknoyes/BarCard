const router = require("express").Router();
const { Liquid } = require("../models");
const withAuth = require("../utils/auth.js");

router.get("/", (req, res) => {
  try {
    res.render("frontpage", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/account", withAuth, (req, res) => {
  try {
    res.render("account", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newrecipe", withAuth, async (req, res) => {
  try {
    const liquidData = await Liquid.findAll();

    // Serialize data so the template can read it
    const liquids = liquidData.map((liquid) => liquid.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("newrecipe", {
      liquids,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newingredient", withAuth, (req, res) => {
  try {
    res.render("newingredient", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", (req, res) => {
  try {
    res.render("search");
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
