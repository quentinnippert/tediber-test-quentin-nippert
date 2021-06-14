const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const OrderSchema = new Schema ({
    client_id : { type: mongoose.Schema.Types.ObjectId, ref: 'clients' },
    order_date: Date,
    shipping_date: Date,
    status: String,
    orders_articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'produits_commandes' }],
    total: Number,
    payment_method: String,
    shipping_price: Number,
    order_number: Number,
    relay_point: Boolean,
});

const OrderModel = model('commandes', OrderSchema);

module.exports = OrderModel;