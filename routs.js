const express = require("express");
const router = express.Router();
const Menu = require("./schema");

router.post("/menu", async (req, res) => {
  try {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new Menu({
      name,
      description,
      price,
    });
    await newItem.save();

    res.status(201).json({ message: "Menu item added", data: newItem });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

router.get("/menu", async (req, res) => {
  try {
    const menuitems = await Menu.find();
    res.status(200).json({ data: menuitems });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
