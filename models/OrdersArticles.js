const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');


const OrderArticlesSchema = new Schema ({
    name: String,
    size: String,
    quantity: Number,
    subTotal: Number,
    img: String,
})

const OrderArticlesModel = model('produits_commandes', OrderArticlesSchema);

module.exports = OrderArticlesModel;