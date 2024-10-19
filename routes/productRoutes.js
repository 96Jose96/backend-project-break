const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { ProductDashboardController, ProductController } = require('../controllers/productController');
const upload = require('../middlewares/middleware')


const checkAuth = require('../middlewares/checkAuth')

router.post('/dashboard', checkAuth, upload.single('image'), ProductDashboardController.create);
router.get('/dashboard', checkAuth, ProductDashboardController.getDashboardProducts);
router.get('/dashboard/new', checkAuth,  ProductDashboardController.newProductForm);
router.get('/dashboard/:productId/edit', checkAuth, ProductDashboardController.updateProductForm);
router.delete('/dashboard/:productId', checkAuth, ProductDashboardController.deleteDashboardProduct);
router.post('/dashboard/:productId', checkAuth, upload.single('image'), ProductDashboardController.updateDashboardProductById);
router.get('/dashboard/:productId', checkAuth, ProductDashboardController.getDashboardProductById);
router.put('/dashboard/:productId', checkAuth, ProductDashboardController.updateDashboardProductById);

router.get('/products', ProductController.getProducts);
router.get('/products/:productId', ProductController.getProductById);


module.exports = router;

