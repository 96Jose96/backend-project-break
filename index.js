const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes/productRoutes');
const apiRouter = require('./routes/apiRoutes')
const dbConnection = require('./config/db');
const methodOverride = require('method-override');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

app.use(cors())

app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/products')
})
app.use('/', router);

app.use('/', apiRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup())

dbConnection();

app.listen(process.env.PORT, () => console.log(`Server on port: ${process.env.PORT}`));