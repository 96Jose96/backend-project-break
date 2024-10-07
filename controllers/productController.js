const Product = require('../models/Product')

const ProductDashboardController = {
    async create (req, res) {
        try {
            const newProduct = await Product.create(req.body)
            res.status(201).json(newProduct)
        } catch (error) {
            console.error('Product create FAILED')
        }
    },

    async getDashboardProducts (req, res) {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            console.error('Get all products FAILED')
        }
    },

    async getDashboardProductById (req, res) {
        try {
            const { productId } = req.params
            const productById = await Product.findById(productId)
            res.status(200).json(productById)
        } catch (error) {
            console.error('Get product by id FAILED')
        }
    },

    
}

module.exports = ProductDashboardController;