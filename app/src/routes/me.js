const express = require('express');
const app = express();
const router = express.Router();
const meController = require('../app/controllers/MeController');




router.get('/stored/products', meController.storedProducts);
router.get('/trash/products', meController.trash);


module.exports = router;

