const express = require('express');
const app = express();
require('dotenv').config()
const router = require('./routes/productRoutes')

app.use(express.urlencoded({ extended: true }))
//app.use(express.static('public'))

app.use('/', router)

app.listen(process.env.PORT, () => console.log(`Server on port: ${process.env.PORT}`))