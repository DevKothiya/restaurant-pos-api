const express = require('express');
const router = express.Router();
const {getRestaurants, createRestaurant} = require('../controllers/restaurantController');

router.post('/restaurants', createRestaurant);

router.get('/restaurants', getRestaurants);

module.exports = router;