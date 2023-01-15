const express = require('express');
const app = express();
const router = express.Router();
const userController = require('../app/controllers/UserController');
const authMiddleware = require('../app/middlewares/AuthMiddleware');




router.get('/register', userController.show);
router.post('/store', userController.store);
router.get('/stored/user-list', authMiddleware, userController.storedUsers);
router.get('/login', userController.loginForm);
router.post('/login', userController.login);
router.get('/edit/password', userController.changePassword);



module.exports = router;

