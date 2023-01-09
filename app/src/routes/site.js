var express = require('express');
var app = express();
var router = express.Router();
const siteController = require('../app/controllers/SiteController');




router.get('/search', siteController.search);
router.get('/:id', siteController.show);
router.get('/', siteController.index);



module.exports = router;

