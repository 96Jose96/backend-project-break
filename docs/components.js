module.exports = {
    components:{
        schemas:{
            Product:{
                type:"object",
                properties:{
                    name:{
                        type:"string",
                        description:"Product name",
                        example:"T-Shirt black"
                    },
                    description: {
                        type: "string",
                        description: "Description of product",
                        example: "Black short sleeve cotton t-shirt"
                    },
                    image: {
                        type: "string",
                        description: "URL image of product",
                        example: "document/images/122457854.jpg"
                    },
                    category: {
                        type:"string",
                        description: "Category of product",
                        example: "Shirts"
                    },
                    size: {
                        type: "string",
                        description:"Size of product",
                        example: "XL"
                    },
                    price: {
                        type: "number",
                        description: "Price of product",
                        example: 49
                    },
                    _id: {
                        type: "string",
                        description: "Product identification number",
                        example: "6594b015541acc"
                    }
                }
            },
            UpdateProduct:{
                type:"object",
                properties:{
                    name:{
                        type:"string",
                        description:"Product name",
                        example:"T-Shirt black"
                    },
                    description: {
                        type: "string",
                        description: "Description of product",
                        example: "Black short sleeve cotton t-shirt"
                    },
                    image: {
                        type: "string",
                        description: "URL image of product",
                        example: "document/images/122457854.jpg"
                    },
                    category: {
                        type:"string",
                        description: "Category of product",
                        example: "Shirts"
                    },
                    size: {
                        type: "string",
                        description:"Size of product",
                        example: "XL"
                    },
                    price: {
                        type: "number",
                        description: "Price of product",
                        example: 49
                    },
                }
            }
        }
    }
  }