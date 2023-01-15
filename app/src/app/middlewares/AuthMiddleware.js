const { request } = require('express');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/users');


module.exports = function AuthMiddleware(req, res, next) {
    // res.locals.is_from_login = {
    //     enabled: false,
    // };

    // if (req.query.hasOwnProperty('is_from_login')) {
    //     res.locals.is_from_login.enabled = true;
    // }

    let token = req.cookies.access_token
    if (!token) {
        res.send('Bạn cần đăng nhập');
    }
    try {
        let result = jwt.verify(token, 'secrect');

        let userId = result._id;
        UserModel.findOne({ _id: userId }).lean()
            .then((data) => {
                let user = data.username;
                res.data = user;
                next();
            })

    } catch (error) {
        return res.sendStatus(403);
    }

};