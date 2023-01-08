const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: String,
    price: Number,
});

const ProductsModel = mongoose.model('product', ProductsSchema);

module.exports = ProductsModel;

