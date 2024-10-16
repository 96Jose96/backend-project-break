const Product = require('../models/Product')

const ApiDashboardController = {
    async create (req, res) {
        try {
            const newProduct = await Product.create(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            console.error('Product create FAILED');
        };
    },

    async getDashboardProducts (req, res) {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            console.error('Get all products FAILED');
        };
    },

    async getDashboardProductById (req, res) {
        try {
            const { productId } = req.params;
            const productById = await Product.findById(productId);
            res.status(200).json(productById);
        } catch (error) {
            console.error('Get product by id FAILED');
        };
    },

    async updateDashboardProductById (req, res) {
        try {
            const { productId } = req.params;
            const { name, description, image, category, size, price } = req.body;
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                {
                    name,
                    description,
                    image,
                    category,
                    size,
                    price
                },
                { new: true }
            );
            
            res.status(200).json(updatedProduct);
        } catch (error) {
            console.error('Get product by id FAILED');
        };
    },

    async deleteDashboardProduct (req, res) {
        try {
            const { productId } = req.params;
            const deletedProduct = await Product.findByIdAndDelete(productId);
            res.status(200).json(deletedProduct);
        } catch (error) {
            console.error('Delete product FAILED');
        };
    }
}

const ApiController = {
    async getProducts (req, res) {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            console.error('Get all products FAILED');
        };
    },

    async getProductById (req, res) {
        try {
            const { productId } = req.params;
            const productById = await Product.findById(productId);
            res.status(200).json(productById);
        } catch (error) {
            console.error('Get product by id FAILED');
        };
    }
}

module.exports = {
    ApiDashboardController,
    ApiController
}