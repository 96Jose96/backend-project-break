const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes/productRoutes');
const dbConnection = require('./config/db');
const methodOverride = require('method-override');

app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/products')
})
app.use('/', router);

dbConnection();

app.listen(process.env.PORT, () => console.log(`Server on port: ${process.env.PORT}`));