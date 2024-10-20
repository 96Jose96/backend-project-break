const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: { type: String, default:'' },
    category: String,
    size: String,
    price: Number
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;                                                            