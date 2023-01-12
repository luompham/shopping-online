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






};

module.exports = new SiteController;
