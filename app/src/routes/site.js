const express = require('express');
const app = express();
const router = express.Router();
const siteController = require('../app/controllers/SiteController');


router.get('/search', siteController.search);
router.get('/', siteController.index);



module.exports = router;

