const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../models/users');
const jwt = require('jsonwebtoken');


class UserController {
    //[GET]/user/register
    show(req, res, next) {
        res.render('users/register');

    }

    //[POST]/user/store
    store(req, res, next) {
        let username = req.body.username;
        let password = req.body.password;
        UserModel.findOne({ username: username })
            .then((data) => {
                if (data) {
                    res.send('User already exists!!!');
                } else {
                    return UserModel.create({
                        username: username,
                        password: password
                    })
                }
            })
            .then((data) => {
                res.json('User has created!!!');
            })
            .catch((err) => {
                res.status(500).json('Create failed!!!');
            });
    }

    //[GET]/user/stored/users
    storedUsers(req, res, next) {
        let logUser = res.data
        if (logUser) {
            res.render('users/stored-users', { logUser });
        } else {
            res.redirect('/');
            // UserModel.find({}).lean()
            // .then((user) => {
            //  
            //     res.render('users/stored-users', { user });
            // })
            // .catch(next);
        }

    };

    //[GET]/user/login
    loginForm(req, res, next) {
        res.render('users/login');
    }

    //[POST]/user/login
    login(req, res, next) {
        let username = req.body.username;
        let password = req.body.password;
        UserModel.findOne({ username: username })
            .then((data) => {
                if (!data) {
                    res.send('User does not exists!!!');
                }
                return UserModel.findOne({ password: password })
                    .then((data) => {
                        if (data) {
                            let token = jwt.sign({ _id: data._id }, 'secrect');
                            return res
                                .cookie("access_token", token, {
                                    httpOnly: true,
                                    secure: process.env.NODE_ENV === "production",
                                })
                                .status(200)
                                .json('Logged in successfully !!!');
                        } else {
                            res.json('Password is incorrect!!!');
                        }
                    });
            })
            .catch(next);
    };

    //[GET]/user/edit/password
    changePassword(req, res, next) {
        //  let oldPassword = req.body.password;
        //  let newPassword = req.body.newPassword;
        //  let cfmNewPassword = req.body.confirmNewPassword;
        res.render('users/change-password');


    }

};

module.exports = new UserController;
