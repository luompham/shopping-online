var express = require('express');
var app = express();
var router = express.Router();
const newsController = require('../app/controllers/NewsController');



router.get('/', newsController.index);
router.get('/:slug', newsController.show);

module.exports = router;

