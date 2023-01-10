const express = require('express');
const siteRouter = require('./site');
const productsRouter = require('./products');
const newsRouter = require('./news');
const meRouter = require('./me');



function route(app) {

    app.use('/news', newsRouter);
    app.use('/products', productsRouter);
    app.use('/me', meRouter);

    app.use('/', siteRouter);



}


module.exports = route;
