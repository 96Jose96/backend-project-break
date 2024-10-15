module.exports = {
    paths: {
      "/dashboard": {
        post: {
          summary: "Create a new product in the dashboard",
          tags: ["Dashboard - Create Product"],
          description: "Create a new product with an image upload in the dashboard",
          operationId: "createProduct",
          requestBody: {
            content: {
              "multipart/form-data": {
                schema: {
                  $ref: "#/components/schemas/ProductInput",
                },
                encoding: {
                  image: {
                    contentType: "image/png, image/jpeg"
                  }
                }
              }
            }
          },
          responses: {
            201: {
              description: "Product created successfully"
            },
            500: {
              description: "Server error"
            }
          }
        },
        get: {
          summary: "Get all products in the dashboard",
          tags: ["Dashboard - Get Products"],
          description: "Fetch all products available in the dashboard",
          operationId: "getDashboardProducts",
          responses: {
            200: {
              description: "Products retrieved successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Product"
                  }
                }
              }
            },
            500: {
              description: "Server error"
            }
          }
        }
      },
      "/dashboard/{productId}": {
        get: {
          summary: "Get product details by ID (dashboard)",
          tags: ["Dashboard - Get Product by ID"],
          description: "Fetch product details by ID from the dashboard",
          operationId: "getDashboardProductById",
          parameters: [
            {
              name: "productId",
              in: "path",
              required: true,
              description: "ID of the product",
              schema: {
                type: "string"
              }
            }
          ],
          responses: {
            200: {
              description: "Product retrieved successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Product"
                  }
                }
              }
            },
            500: {
              description: "Server error"
            }
          }
        },
        put: {
          summary: "Update product by ID (dashboard)",
          tags: ["Dashboard - Update Product"],
          description: "Update the details of a product by its ID",
          operationId: "updateProductById",
          parameters: [
            {
              name: "productId",
              in: "path",
              required: true,
              description: "ID of the product to update",
              schema: {
                type: "string"
              }
            }
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductInput"
                }
              }
            }
          },
          responses: {
            200: {
              description: "Product updated successfully"
            },
            500: {
              description: "Server error"
            }
          }
        },
        delete: {
          summary: "Delete product by ID (dashboard)",
          tags: ["Dashboard - Delete Product"],
          description: "Delete a product from the dashboard by its ID",
          operationId: "deleteProductById",
          parameters: [
            {
              name: "productId",
              in: "path",
              required: true,
              description: "ID of the product to delete",
              schema: {
                type: "string"
              }
            }
          ],
          responses: {
            200: {
              description: "Product deleted successfully"
            },
            500: {
              description: "Server error"
            }
          }
        }
      },
      "/products": {
        get: {
          summary: "Get all products",
          tags: ["Public - Get Products"],
          description: "Fetch all available products",
          operationId: "getProducts",
          responses: {
            200: {
              description: "Products retrieved successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Product"
                  }
                }
              }
            },
            500: {
              description: "Server error"
            }
          }
        }
      },
      "/products/{productId}": {
        get: {
          summary: "Get product details by ID",
          tags: ["Public - Get Product by ID"],
          description: "Fetch product details by its ID",
          operationId: "getProductById",
          parameters: [
            {
              name: "productId",
              in: "path",
              required: true,
              description: "ID of the product",
              schema: {
                type: "string"
              }
            }
          ],
          responses: {
            200: {
              description: "Product retrieved successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Product"
                  }
                }
              }
            },
            500: {
              description: "Server error"
            }
          }
        }
      }
    }
  };
  