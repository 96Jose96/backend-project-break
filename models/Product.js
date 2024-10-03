const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    category: String,
    size: String,
    price: Number
}, { timestamps: true });

const Card = mongoose.model('Card', CardSchema);

module.exports = Card