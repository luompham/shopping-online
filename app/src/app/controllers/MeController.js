const mongoose = require('mongoose');
const ProductsModel = require('../models/products');

class MeController {
    //[GET]/me/products
    show(req, res, next) {
        ProductsModel.find({}).lean()
            .then((products) => {
                res.render('me/stored-products', { products });
            })
            .catch(next);
    };

    //[GET]/me/trash/products
    trash(req, res, next) {
        ProductsModel.findDeleted({}).lean()
            .then((products) => {
                res.render('me/trash-products', { products });
            })
            .catch(next);
    }


};

module.exports = new MeController;
