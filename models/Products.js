const { Schema, model } = require('mongoose');

const ProductSchema = new Schema ({
    name: String,
    size: String,
    img: String,
    price: Number,
});

const ProductModel = model('Produits', ProductSchema);

module.exports = ProductModel;