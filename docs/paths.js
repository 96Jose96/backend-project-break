module.exports = {
    paths: {
      '/products': {
        get: {
          tags: ['Products'],
          summary: 'Get all products',
          responses: {
            200: {
              description: 'List of products',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Product',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/products/{productId}': {
        get: {
          tags: ['Products'],
          summary: 'Get product by ID',
          parameters: [
            {
              name: 'productId',
              in: 'path',
              required: true,
              description: 'ID of the product to retrieve',
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            200: {
              description: 'Product details',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Product',
                  },
                },
              },
            },
            404: {
              description: 'Product not found',
            },
          },
        },
      },
    },
  };
  