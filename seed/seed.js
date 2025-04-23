const mongoose = require('mongoose');
require('dotenv').config();
const MenuItem = require('../models/MenuItem');

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected'));

const seedItems = async () => {
  await MenuItem.deleteMany({});

  const items = [
    {
      restaurant_id: '643a9a1f2f1234567890abcd',
      name: 'Margherita Pizza',
      price: 300,
      category: 'Pizza',
      is_available: true
    },
    {
      restaurant_id: '643a9a1f2f1234567890abcd',
      name: 'Garlic Bread',
      price: 150,
      category: 'Appetizer',
      is_available: true
    }
  ];

  await MenuItem.insertMany(items);
  console.log('Seed data inserted!');
  process.exit();
};

seedItems();
