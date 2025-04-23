const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  menu_item_id: mongoose.Schema.Types.ObjectId,
  name: String,
  quantity: Number,
  price: Number,
  total: Number
});

const orderSchema = new mongoose.Schema({
  restaurant_id: mongoose.Schema.Types.ObjectId,
  customer_name: String,
  order_type: String,
  created_at: { type: Date, default: Date.now },
  items: [orderItemSchema],
  total_price: Number
});

module.exports = mongoose.model('Order', orderSchema);