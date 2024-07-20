const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: String,
    category: String,
    price: Number,
    rating: Number,
    discount: Number,
    company: String,
    details: Object
});

module.exports = mongoose.model('Product', productSchema);
