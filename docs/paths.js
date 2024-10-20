module.exports = {
  paths: {
    "/dashboard/create": {
      post: {
        summary: "",
        tags: ["Admin - Create a product"],
        description: "Create product",
        operationId: "createProduct",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Product created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/dashboard": {
      get: {
        summary: "",
        tags: ["Admin - Get all products"],
        description: "Get all products",
        operationId: "getProducts",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Get all products successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/dashboard/{productId}": {
      get: {
        summary: "",
        tags: ["Admin - Get product by ID"],
        description: "Get product by ID",
        operationId: "productById",
        parameters: [
          {
            name: ":productId",
              in: "path",
              required: true,
              schema: {
                type: "string"
              },           
            description: "Id of product"
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          200: {
            description: "TGet elemente by ID successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
    "/dashboard/update/{productId}": {
      put: {
        summary: "",
        tags: ["Admin - Update product by ID"],
        description: "Update product by ID",
        operationId: "updateProductById",
        parameters: [
          {
            name: ":productId",
              in: "path",
              required: true,
              schema: {
                type: "string"
              },           
            description: "Id of product"
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateProduct",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Update product by ID successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
    "/dashboard/delete/{productId}": {
        delete: {
          summary: "",
          tags: ["Admin - Delete a product"],
          description: "Delete product",
          operationId: "deleteProduct",
          parameters: [
            {
              name: ":productId",
              in: "path",
              required: true,
              schema: {
                type: "string"
              },           
              description: "Id product delete"
            }
          ],
          responses: {
            200: {
              description: "Product deleted successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
    },
    "/products": {
      get: {
        summary: "",
        tags: ["Public - Get all products"],
        description: "Get all products",
        operationId: "getProducts",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Get all products successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/products/{productId}": {
      get: {
        summary: "",
        tags: ["Public - Get product by ID"],
        description: "Get product by ID",
        operationId: "productById",
        parameters: [
          {
            name: ":productId",
              in: "path",
              required: true,
              schema: {
                type: "string"
              },           
            description: "Id of product"
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          200: {
            description: "TGet elemente by ID successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
  },
};