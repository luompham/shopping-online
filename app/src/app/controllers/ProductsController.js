const mongoose = require('mongoose');
const ProductsModel = require('../models/products');

class ProductsController {

    //[GET]/create
    create(req, res) {
        res.render('products/create');
    };

    //[POST]/store
    store(req, res, next) {
        const product = new ProductsModel(req.body)
        product.save()
            .then(() => {
                res.redirect('/me/stored/products');
            })
            .catch(next);
    };

    //[GET]/products/:id
    show(req, res, next) {
        let id = req.params.id;
        ProductsModel.findOne({ _id: id }).lean()
            .then((products) => {
                res.render('products/show', { products });
            })
            .catch(next);

    };


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

    //[DELETE]/products/:id
    destroy(req, res, next) {
        let id = req.params.id;
        ProductsModel.delete({ _id: id }).lean()
            .then(() => {
                res.redirect('back')
            })
            .catch(next);
    };

    //[DELETE]/products/:id/force
    forceDestroy(req, res, next) {
        let id = req.params.id;
        ProductsModel.deleteOne({ _id: id }).lean()
            .then(() => {
                res.redirect('back')
            })
            .catch(next);
    };

    //[PATCH]/products/:id/restore
    restore(req, res, next) {
        let id = req.params.id;
        ProductsModel.restore({ _id: id }).lean()
            .then(() => {
                res.redirect('back')
            })
            .catch(next);
    }


};

module.exports = new ProductsController;
