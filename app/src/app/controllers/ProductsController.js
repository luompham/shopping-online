const mongoose = require('mongoose');
const ProductsModel = require('../models/products');

class ProductsController {
    //[GET]/products/:id/edit
    edit(req, res, next) {
        let id = req.params.id;
        ProductsModel.findOne({ _id: id }).lean()
            .then((products) => {
                res.render('products/edit', { products });
            })
            .catch(next);
    };

    //[PUT]/products/:id/update
    update(req, res, next) {
        let id = req.params.id;
        ProductsModel.updateOne({ _id: id }, req.body).lean()
            .then(() => {
                res.redirect('/me/products')
            })
            .catch(next);
    };
};

module.exports = new ProductsController;
