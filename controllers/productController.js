const Product = require('../models/Product')

const ProductController = {
    async create (req, res) {
        try {
            const product = await Product.create({ ...req.body })
            res.status(201).json(product)
        } catch (err) {
            console.error('Product create FAILED')
        }
    }
}

module.exports = ProductController;