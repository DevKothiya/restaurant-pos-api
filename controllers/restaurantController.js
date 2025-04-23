const Restaurant = require('../models/Restaurant');


exports.getRestaurants= async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.json(restaurants);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
  }
exports.createRestaurant =  async (req, res) => {
    try {
      const restaurant = new Restaurant({ name: req.body.name });
      const saved = await restaurant.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create restaurant' });
    }
  }