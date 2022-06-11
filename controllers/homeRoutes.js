const router = require("express").Router();
const { Liquid, Drink, User } = require("../models");
const withAuth = require("../utils/auth.js");
const format_date = require("../utils/helpers.js");

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

router.get("/search", withAuth, async (req, res) => {
  try {
    const recipeData = await Drink.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((drink) => drink.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("search", { recipes, logged_in: req.session.logged_in });
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

router.get("/logout", (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
