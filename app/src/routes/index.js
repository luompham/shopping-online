const express = require('express');
const siteRouter = require('./site');
const productsRouter = require('./products');
const newsRouter = require('./news');



function route(app) {

    app.use('/news', newsRouter);
    app.use('/products', productsRouter);

    app.use('/', siteRouter);



}


module.exports = route;
