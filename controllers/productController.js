const Product = require('../models/Product');

const ProductDashboardController = {
    async create (req, res) {
        try {
            const newProduct = await Product.create(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            console.error('Product create FAILED');
        };
    },

    async getDashboardProducts (req, res) { //añadir que al clickar en uno nos lleva a su pagina para poder eliminarlo o editarlo
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
    },

    async newProductForm (req,res) {
        try {
            res.send (
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Create Product</title>
                </head>
                <body>
                    <main>
                        <form action = "/dashboard" method="POST">
                            <label for="name">Artículo</label>
                            <input type="text" id="name" name="name" required>

                            <label for="description">Descripción</label>
                            <textarea id="description" name="description" required></textarea>

                            <label for="image">Imagen</label>
                            <input type="text" id="image" name="image">

                            <label for="category">Categoría</label>
                            <input type="text" id="category" name="category" required>

                            <label for="size">Talla</label>
                            <input type="text" id="size" name="size" required>

                            <label for="price">Precio</label>
                            <input type="number" id="price" name="price" required>

                            <button type="submit">Crear</button>
                        </form>
                    </main>
                </body>
                </html>`
            );
        } catch (error) {
            console.error('Get createform FAILED');
        };
    },

    async updateProductForm (req,res) {
        try {
            const { productId } = req.params;
            const updateProduct = await Product.findById(productId);

            res.send (
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Update Product</title>
                </head>
                <body>
                    <main>
                        <form action = "/dashboard/${productId}" method="POST">
                            <input type="hidden" name="_method" value="PUT">    

                            <label for="name">Artículo</label>
                            <input type="text" id="name" name="name" value="${updateProduct.name}">

                            <label for="description">Descripción</label>
                            <textarea id="description" name="description">${updateProduct.description}</textarea>

                            <label for="image">Imagen</label>
                            <input type="text" id="image" name="image" value="${updateProduct.image}">

                            <label for="category">Categoría</label>
                            <input type="text" id="category" name="category" value="${updateProduct.category}">

                            <label for="size">Talla</label>
                            <input type="text" id="size" name="size" value="${updateProduct.size}">

                            <label for="price">Precio</label>
                            <input type="number" id="price" name="price" value="${updateProduct.price}">

                            <button type="submit">Actualizar</button>
                        </form>
                    </main>
                </body>
                </html>`
            );
        } catch (error) {
            console.error('Get updateform FAILED');
        };
    }
}

const ProductController = {
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

module.exports = { ProductDashboardController, ProductController };