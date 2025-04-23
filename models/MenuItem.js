const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  restaurant_id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  category: String,
  is_available: Boolean
});

module.exports = mongoose.model('MenuItem', menuItemSchema);