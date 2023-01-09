const express = require('express');
const app = express();
const router = express.Router();
const siteController = require('../app/controllers/SiteController');



router.get('/create', siteController.create);
router.post('/store', siteController.store);
router.get('/', siteController.index);

module.exports = router;

