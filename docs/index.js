const basicInfo = require('./basicInfo')
const components = require('./components')
const paths = require('./paths')

module.exports = {
    openapi: "3.0.3",
    info: {
        title: "Products API",
        version: "1.0.0",
        description: "API para gestionar productos"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Servidor local"
        }
    ],
    components: {
        ...components.components
    },
    paths: {
        ...paths.paths
    }
};
