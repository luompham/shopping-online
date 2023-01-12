const mongoose = require('mongoose');
const ProductsModel = require('../models/products');

class MeController {
    //[GET]/me/stored/products
    storedProducts(req, res, next) {
        let findProducts = ProductsModel.find({}).lean();
        let countDeleted = ProductsModel.countDocumentsDeleted().lean();
        let countProducts = ProductsModel.countDocuments().lean();
        return Promise.all([findProducts, countDeleted, countProducts])
            .then(([products, deletedQty, productsQty]) => {
                res.render('me/stored-products', { products, deletedQty, productsQty });
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
