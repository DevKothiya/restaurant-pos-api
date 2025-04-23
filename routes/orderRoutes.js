const express = require('express');
const router = express.Router();
const { createOrder, getOrder ,getOrders} = require('../controllers/orderController');

router.post('/orders', createOrder);
router.get('/orders/:id', getOrder);
router.get('/orders', getOrders);
module.exports = router;
