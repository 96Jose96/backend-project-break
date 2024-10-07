const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const ProductDashboardController = require('../controllers/productController')

router.post('/dashboard', ProductDashboardController.create)
router.get('/dashboard', ProductDashboardController.getDashboardProducts)
router.get('/dashboard/:productId', ProductDashboardController.getDashboardProductById)

module.exports = router