const express = require('express');
const apiRouter = express.Router();
const Product = require('../models/Product');
const { ApiDashboardController, ApiController } = require('../controllers/apiController');


apiRouter.post('/dashboard', ApiDashboardController.create)
apiRouter.get('/dashboard', ApiDashboardController.getDashboardProducts)
apiRouter.get('/dashboard/:productId', ApiDashboardController.getDashboardProductById)
apiRouter.put('/dashboard/:productId', ApiDashboardController.updateDashboardProductById)
apiRouter.delete('/dashboard/:productId', ApiDashboardController.deleteDashboardProduct)

apiRouter.get('/products', ApiController.getProducts)
apiRouter.get('/products/:productId', ApiController.getProductById)

module.exports = apiRouter