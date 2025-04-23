const MenuItem = require('../models/MenuItem');
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { restaurant_id, customer_name, order_type, items } = req.body;
    let total_price = 0;
    const orderItems = [];

    for (const item of items) {
      const menuItem = await MenuItem.findOne({
        _id: item.menu_item_id,
        restaurant_id,
        is_available: true,
      });

      if (!menuItem) {
        return res.status(400).json({ error: `Menu item ${item.menu_item_id} not found or unavailable.` });
      }

      const item_total = menuItem.price * item.quantity;
      total_price += item_total;

      orderItems.push({
        menu_item_id: menuItem._id,
        name: menuItem.name,
        quantity: item.quantity,
        price: menuItem.price,
        total: item_total,
      });
    }

    const order = new Order({
      restaurant_id,
      customer_name,
      order_type,
      items: orderItems,
      total_price,
    });

    const savedOrder = await order.save();

    res.status(201).json({
      customer_name: savedOrder.customer_name,
      order_type: savedOrder.order_type,
      created_at: savedOrder.created_at,
      items: savedOrder.items,
      total_price: savedOrder.total_price,
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    res.json({
      customer_name: order.customer_name,
      order_type: order.order_type,
      created_at: order.created_at,
      items: order.items,
      total_price: order.total_price,
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getOrders=async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

