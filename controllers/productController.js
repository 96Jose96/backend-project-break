const Product = require('../models/Product')

const ProductDashboardController = {
    async create (req, res) {
        try {
            const newProduct = await Product.create({ 
                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                category: req.body.category,
                size: req.body.size,
                proce: req.body.price
             })
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
            console.error('Product create FAILED')
            res.status(500).send("Server error")
        };
    },

    async getDashboardProducts (req, res) {
        try {
            const products = await Product.find();
    
            let html = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/style.css">
                    <title>Gestionar Productos</title>
                </head>
                <body>
                    <header>
                        <form action="/logout" method="POST">
                            <button type="submit">Logout</button>
                        </form>
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
                                <img src="/images/${product.image}" alt="${product.name}" width="200" />
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
                                <button class="deleteBtn" onclick="deleteProduct('${product._id}')">Eliminar</button>
                            </div>
                        </div>
                    </li>
                `;
            });
    
            html += `
                            </ul>
                        </section>
                    </main>
    
                    <script>
                        async function deleteProduct(productId) {
                            const confirmation = confirm("¿Desea eliminar este producto?");
                            if (confirmation) {
                                try {
                                    const response = await fetch('/dashboard/' + productId, {
                                        method: 'DELETE'
                                    });
                                    if (response.ok) {
                                        alert('Producto eliminado correctamente.');
                                        window.location.reload();
                                    }
                                } catch (error) {
                                    console.error('Delete product FAILED', error);
                                    alert('Error al eliminar el producto.');
                                }
                            }
                        }
                    </script>
                </body>
                </html>
            `;
    
            res.send(html);
        } catch (error) {
            console.error('Get products FAILED', error);
            res.status(500).send("Server error");
        }
    },
    

    async getDashboardProductById (req, res) {
        try {
            const { productId } = req.params;
            const productById = await Product.findById(productId)

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
                        <button class="homeBtn" onClick="window.location.href='/dashboard'">Home</button>
                        <button type="submit">Logout</button>
                    </header>
                    <main>
                        <section>
                            <ul id="productsList" class="productsList">
                                <li>
                                    <div id="card" class="card">
                                        <div id="mainData" class="mainData">
                                            <img src="/images/${productById.image}" alt="${productById.name}" width="200" />
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
            `

            res.send(html)

        } catch (error) {
            console.error('Get dashboard product by id FAILED')
            res.status(500).send('Server error')
        };
    },

    async updateDashboardProductById (req, res) {
        try {
            const { productId } = req.params;
            const { name, description, image, category, size, price } = req.body
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                {
                    name,
                    description,
                    category,
                    size,
                    price
                },
                { new: true }
            );
            
            res.send(
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="refresh" content="3;url=/dashboard">
                    <title>Create Product</title>
                </head>
                <body>
                    <header>
                        <button class="homeBtn" onClick="window.location.href='/dashboard'">Home</button>
                        <button type="submit">Logout</button>
                    </header>
                    <main>
                        <p>Producto modificado corréctamente</p>
                        <ul id="productsList" class="productsList">
                                <li>
                                    <div id="card" class="card">
                                        <div id="mainData" class="mainData">
                                            <img src="/images/${updatedProduct.image}" alt="${updatedProduct.name}" width="200" />
                                            <div id="primaryData" class="primaryData">
                                                ${updatedProduct.name}<br>
                                                Categoría: ${updatedProduct.category} <br>
                                                Talla: ${updatedProduct.size} <br>
                                                ID: ${updatedProduct._id} <br>
                                                ${updatedProduct.price}€ IVA incluido.
                                            </div>
                                        </div>
                                        <p>${updatedProduct.description}</p>
                                        <div id="cardButtons" class="cardButtons"></div>
                                    </div>
                                </li>
                            </ul>
                    </main>
                </body>
                </html>`
            )
        } catch (error) {
            console.error('Update product FAILED')
        }
    },

    async deleteDashboardProduct (req, res) {
        try {
            const { productId } = req.params
            const deletedProduct = await Product.findByIdAndDelete(productId)
            
            res.status(200).json('Product deleted OK')

        } catch (error) {
            console.error('Delete product FAILED')
        }
    },

    async newProductForm (req,res) {
        try {
            res.send (
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/createFormStyle.css">
                    <title>Create Product</title>
                </head>
                <body>
                    <header>
                        <button class="homeBtn" onClick="window.location.href='/dashboard'">Home</button>
                        <button type="submit">Logout</button>
                    </header>
                    <main>
                        <form action = "/dashboard" method="POST" enctype="multipart/form-data">
                            <label for="name">Artículo</label>
                            <input type="text" id="name" name="name" required>

                            <label for="description">Descripción</label>
                            <textarea id="description" name="description" required></textarea>

                            <label for="image">Imagen</label>
                            <input type="file" id="image" name="image" accept="image/*">

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
            )
        } catch (error) {
            console.error('Get createform FAILED')
        }
    },

    async updateProductForm (req,res) {
        try {
            const { productId } = req.params
            const updateProduct = await Product.findById(productId)

            res.send (
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/createFormStyle.css">
                    <title>Update Product</title>
                </head>
                <body>
                    <header>
                        <button class="homeBtn" onClick="window.location.href='/dashboard'">Home</button>
                        <button type="submit">Logout</button>
                    </header>
                    <main>
                        <form action = "/dashboard/${productId}" method="POST">
                            <input type="hidden" name="_method" value="PUT">    

                            <label for="name">Artículo</label>
                            <input type="text" id="name" name="name" value="${updateProduct.name}">

                            <label for="description">Descripción</label>
                            <textarea id="description" name="description">${updateProduct.description}</textarea>

                            <label for="image">Imagen</label>
                            <input type="file" id="image" name="image">

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
            const products = await Product.find()
    
            let html = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/style.css">
                    <title>Product</title>
                </head>
                <body>
                    <header>
                        <form action="/register" method="GET">
                            <button type="submit">Register</button>
                        </form>
                        <form action="/login" method="GET">
                            <button type="submit">Login</button>
                        </form>
                    </header>
                    <main>
                        <section>
                            <ul id="productsList" class="productsList">
            `
    
            products.forEach(product => {
                html += `
                    <li>
                        <div id="card" class="card">
                            <div id="mainData" class="mainData">
                                <img src="/images/${product.image}" alt="${product.name}" width="200" />
                                <div id="primaryData" class="primaryData">
                                    ${product.name}<br>
                                    Categoría: ${product.category} <br>
                                    Talla: ${product.size} <br>
                                </div>
                            </div>                       
                            <button class="detailsBtn" onclick="window.location.href='/products/${product._id}'">Detalles</button
                        </div>
                    </li>
                `
            })
    
            html += `
                            </ul>
                        </section>
                    </main>
                </body>
                </html>
            `
    
            res.send(html)
    
        } catch (error) {
            console.error('Get all products FAILED', error)
            res.status(500).send('Error retrieving products')
        }
    },
    

    async getProductById (req, res) {
        try {
            const { productId } = req.params
            const productById = await Product.findById(productId)

            let html = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/details.style.css">
                    <title>Product</title>
                </head>
                <body>
                    <header>
                        <div class="home">
                            <button class="homeBtn" onClick="window.location.href='/products'">Home</button>
                        </div>
                        <div class="users">
                            <form action="/register" method="GET">
                                <button type="submit">Register</button>
                            </form>
                            <form action="/login" method="GET">
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </header>
                    <main>
                        <section>
                            <ul id="productsList" class="productsList">
                                <li>
                                    <div id="card" class="card">
                                        <div id="mainData" class="mainData">
                                            <img src="/images/${productById.image}" alt="${productById.name}" width="200" />
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
            `

            res.send(html)
        } catch (error) {
            console.error('Get product by id FAILED')
        }
    }
}

module.exports = { ProductDashboardController, ProductController };