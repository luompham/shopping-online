const mongoose = require('mongoose');
const ProductsModel = require('../models/products');

class SiteController {
    //[GET]/
    index(req, res) {
        ProductsModel.find({}).lean()
            .then((products) => {
                res.render('home', { products });
            })
            .catch((err) => {
                res.status(500).send(err)
            });

    };

    //[GET]/search
    search(req, res) {
        res.render('search');
    };

    //[GET]/:slug
    show(req, res) {
        let id = req.params.id;
        ProductsModel.findOne({ _id: id }).lean()
            .then((products) => {
                res.render('products', { products });
            })
            .catch((err) => {
                res.status(500).send(err)
            });

    };


    //[GET]/create
    create(req, res) {
        res.render('create');
    };

    //[POST]/create
    store(req, res, next) {
        console.log(req.body)
        const product = new ProductsModel(req.body)
        product.save()
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    };

};

module.exports = new SiteController;
