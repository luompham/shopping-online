const express = require('express');
const app = express();
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const productsController = require('../app/controllers/ProductsController');


router.get('/create', productsController.create);
router.post('/store', productsController.store);
router.get('/:id/edit', productsController.edit);
router.put('/:id', productsController.update);
router.delete('/:id/force', productsController.forceDestroy);
router.delete('/:id', productsController.destroy);
router.patch('/:id/restore', productsController.restore);
router.post('/handle-form-actions', productsController.handleFormActions);
router.post('/trash/handle-form-actions', productsController.trashHandleFormActions);
router.get('/:id', productsController.show);


module.exports = router;

