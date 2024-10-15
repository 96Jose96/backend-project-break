module.exports = {
    components: {
        schemas: {
            Product: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: "Unique identifier of the product",
                        example: "614c1b1fcf1a4e001cd9f9e4"
                    },
                    name: {
                        type: 'string',
                        description: "Name of the product",
                        example: "Shirt"
                    },
                    description: {
                        type: 'string',
                        description: "Description of the product",
                        example: "Cotton T-shirt, available in multiple sizes."
                    },
                    image: {
                        type: 'file',
                        description: "URL of the product image",
                        example: "Public/images/tshirt.png"
                    },
                    category: {
                        type: 'string',
                        description: "Category of the product",
                        example: "Coats"
                    },
                    size: {
                        type: 'string',
                        description: "Size of the product",
                        example: "XL"
                    },
                    price: {
                        type: 'number',
                        description: "Price of the product",
                        example: 25
                    }
                }
            }
        }
    }
}