const OrderModel = require('../models/Orders');


const order_GET_One_Controller = async (req, res) => {

    try {
        let order = await OrderModel.findById(req.query.id).populate('client_id').populate('orders_articles');
        console.log(order, '<-  - - - order found');
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

module.exports = order_GET_One_Controller;