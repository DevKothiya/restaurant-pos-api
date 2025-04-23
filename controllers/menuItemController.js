const MenuItem = require('../models/MenuItem');


exports.createMenuItem = async (req, res) => {
  try {
    const items = Array.isArray(req.body) ? req.body : [req.body];
    const savedItems = await MenuItem.insertMany(items);
    res.status(201).json(savedItems);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add menu items' });
  }
}

exports.getMenuItems = async (req, res) => {
    try {
      const menuItems = await MenuItem.find();
      res.json(menuItems);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch menu items' });
    }
  }
