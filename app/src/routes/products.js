const express = require('express');
const app = express();
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const productsController = require('../app/controllers/ProductsController');



router.get('/create', siteController.create);
router.post('/store', siteController.store);
router.get('/:id/edit', productsController.edit);
router.put('/:id', productsController.update);
router.delete('/:id/force', productsController.forceDestroy);
router.delete('/:id', productsController.destroy);
router.patch('/:id/restore', productsController.restore);
router.get('/', siteController.index);

module.exports = router;

