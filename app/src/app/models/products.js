const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: String,
    model: String,
    price: Number,
    image: String
});

const ProductsModel = mongoose.model('product', ProductsSchema);

module.exports = ProductsModel;

