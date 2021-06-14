const { Router } = require('express');
const ProductModel = require('../models/Products');
const router = Router();

const order_GET_One_Controller = require('../controllers/order_GET_One_Controller');

router.get('/order', order_GET_One_Controller);


module.exports = router;