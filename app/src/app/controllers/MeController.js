const mongoose = require('mongoose');
const ProductsModel = require('../models/products');

class MeController {
    //[GET]/me/products
    show(req, res) {
        ProductsModel.find({}).lean()
            .then((products) => {
                res.render('me/stored-products', { products });
            })
            .catch((err) => {
                res.status(500).send(err)
            });
    };
};

module.exports = new MeController;
