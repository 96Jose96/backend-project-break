const Product = require('../models/Product');

const ProductDashboardController = {
    async create (req, res) {
        try {
            const newProduct = await Product.create(req.body);
            res.send(
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="refresh" content="2;url=/dashboard/new">
                    <title>Create Product</title>
                </head>
                <body>
                    <main>
                        <p>Producto creado corréctamente</p>
                    </main>
                </body>
                </html>`
            );
        } catch (error) {
            console.error('Product create FAILED');
        };
    },

    async getDashboardProducts (req, res) { //añadir que al clickar en uno nos lleva a su pagina para poder eliminarlo o editarlo
        try {
            const products = await Product.find();
    
            let html = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Create Product</title>
                </head>
                <body>
                    <header>
                        <nav>
                            <input type="search" id="searchInput" class="searchInput" placeholder="Buscar..." />
                        </nav>
                        <button type="submit">Login</button>
                    </header>
                    <main>
                        <section>
                            <ul id="productsList" class="productsList">
            `;
    
            products.forEach(product => {
                html += `
                    <li>
                        <div id="card" class="card">
                            <div id="mainData" class="mainData">
                                <img src="" alt="${product.name}">
                                <div id="primaryData" class="primaryData">
                                    ${product.name}<br>
                                    Categoría: ${product.category} <br>
                                    Talla: ${product.size} <br>
                                    ID: ${product._id} <br>
                                    ${product.price}€ IVA incluido.
                                </div>
                            </div>
                            <p>${product.description}</p>
                            <div id="cardButtons" class="cardButtons">
                                <button class="updateBtn" onclick="window.location.href='/dashboard/${product._id}/edit'">Modificar</button>
                                <button class="deleteBtn" onclick="window.Location.href='/dashboard/${product._id}'">Eliminar</button>
                            </div>
                        </div>
                    </li>
                `;
            });
    
            html += `
                            </ul>
                        </section>
                    </main>
                </body>
                </html>
            `;
    
            res.send(html);

        } catch (error) {
            console.error('Get all products FAILED');
        };
    },

    async getDashboardProductById (req, res) {
        try {
            const { productId } = req.params;
            const productById = await Product.findById(productId);

            let html = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Create Product</title>
                </head>
                <body>
                    <header>
                        <nav>
                            <input type="search" id="searchInput" class="searchInput" placeholder="Buscar..." />
                        </nav>
                        <button type="submit">Login</button>
                    </header>
                    <main>
                        <section>
                            <ul id="productsList" class="productsList">
                                <li>
                                    <div id="card" class="card">
                                        <div id="mainData" class="mainData">
                                            <img src="" alt="${productById.name}">
                                            <div id="primaryData" class="primaryData">
                                                ${productById.name}<br>
                                                Categoría: ${productById.category} <br>
                                                Talla: ${productById.size} <br>
                                                ID: ${productById._id} <br>
                                                ${productById.price}€ IVA incluido.
                                            </div>
                                        </div>
                                        <p>${productById.description}</p>
                                        <div id="cardButtons" class="cardButtons"></div>
                                    </div>
                            </li>
                            </ul>
                        </section>
                    </main>
                </body>
                </html>
            `;

            res.send(html)

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
            
            res.send(
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="refresh" content="2;url=/dashboard">
                    <title>Deleted Product</title>
                </head>
                <body>
                    <main>
                        <p>Producto borrado corréctamente</p>
                    </main>
                </body>
                </html>`
            );

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
    },
}

const ProductController = {
    async getProducts(req, res) {
        try {
            const products = await Product.find();
    
            let html = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Create Product</title>
                </head>
                <body>
                    <header>
                        <nav>
                            <input type="search" id="searchInput" class="searchInput" placeholder="Buscar..." />
                        </nav>
                        <button type="submit">Login</button>
                    </header>
                    <main>
                        <section>
                            <ul id="productsList" class="productsList">
            `;
    
            products.forEach(product => {
                html += `
                    <li>
                        <div id="card" class="card">
                            <div id="mainData" class="mainData">
                                <img src="" alt="${product.name}">
                                <div id="primaryData" class="primaryData">
                                    ${product.name}<br>
                                    Categoría: ${product.category} <br>
                                    Talla: ${product.size} <br>
                                    ID: ${product._id} <br>
                                    ${product.price}€ IVA incluido.
                                </div>
                            </div>
                            <p>${product.description}</p>
                            <div id="cardButtons" class="cardButtons">
                                
                            </div>
                        </div>
                    </li>
                `;
            });
    
            html += `
                            </ul>
                        </section>
                    </main>
                </body>
                </html>
            `;
    
            res.send(html);
    
        } catch (error) {
            console.error('Get all products FAILED', error);
            res.status(500).send('Error retrieving products');
        }
    },
    

    async getProductById (req, res) {
        try {
            const { productId } = req.params;
            const productById = await Product.findById(productId);

            let html = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Create Product</title>
                </head>
                <body>
                    <header>
                        <nav>
                            <input type="search" id="searchInput" class="searchInput" placeholder="Buscar..." />
                        </nav>
                        <button type="submit">Login</button>
                    </header>
                    <main>
                        <section>
                            <ul id="productsList" class="productsList">
                                <li>
                                    <div id="card" class="card">
                                        <div id="mainData" class="mainData">
                                            <img src="" alt="${productById.name}">
                                            <div id="primaryData" class="primaryData">
                                                ${productById.name}<br>
                                                Categoría: ${productById.category} <br>
                                                Talla: ${productById.size} <br>
                                                ID: ${productById._id} <br>
                                                ${productById.price}€ IVA incluido.
                                            </div>
                                        </div>
                                        <p>${productById.description}</p>
                                        <div id="cardButtons" class="cardButtons"></div>
                                    </div>
                            </li>
                            </ul>
                        </section>
                    </main>
                </body>
                </html>
            `;

            res.send(html)
        } catch (error) {
            console.error('Get product by id FAILED');
        };
    }
}

module.exports = { ProductDashboardController, ProductController };