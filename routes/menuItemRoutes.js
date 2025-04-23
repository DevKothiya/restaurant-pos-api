const express = require('express');
const router = express.Router();
const { createMenuItem, getMenuItems } = require('../controllers/menuItemController');
router.post('/menu-items', createMenuItem);

router.get('/menu-items', getMenuItems);
module.exports = router;