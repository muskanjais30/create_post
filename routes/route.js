const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

router.get('/list',productController.getProducts);
router.get('/list/:id',productController.getProductsById);
router.post('/upload',productController.uploadProducts);
router.put('/list/:id',productController.updateProducts);

module.exports = router;