const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: String,
    model: String,
    price: String,
    image: String
}, {

    timestamps: true,
});

const ProductsModel = mongoose.model('product', ProductsSchema);

module.exports = ProductsModel;

