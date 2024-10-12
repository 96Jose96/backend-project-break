const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { ProductDashboardController, ProductController } = require('../controllers/productController');
const upload = require('../middlewares/middleware')


router.post('/dashboard', upload.single('image'), ProductDashboardController.create);
router.get('/dashboard', ProductDashboardController.getDashboardProducts);
router.get('/dashboard/new', ProductDashboardController.newProductForm);
router.get('/dashboard/:productId/edit', ProductDashboardController.updateProductForm);
router.delete('/dashboard/:productId', ProductDashboardController.deleteDashboardProduct);
router.post('/dashboard/:productId', ProductDashboardController.updateDashboardProductById);
router.get('/dashboard/:productId', ProductDashboardController.getDashboardProductById);
router.put('/dashboard/:productId', ProductDashboardController.updateDashboardProductById);

router.get('/products', ProductController.getProducts);
router.get('/products/:productId', ProductController.getProductById);


module.exports = router;

