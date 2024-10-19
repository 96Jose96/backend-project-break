const express = require('express');
const app = express();
require('dotenv').config();
const admin = require('firebase-admin')
const serviceAccount = require('./config/serviceAccount')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
const cookieParser = require('cookie-parser')

const router = require('./routes/productRoutes');
const viewRouter = require('./routes/viewRoutes')
const apiRouter = require('./routes/apiRoutes')

const dbConnection = require('./config/db');
const methodOverride = require('method-override');
const path = require('path')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

app.use(cors())
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))

app.use(cookieParser())

app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/products')
})
app.use('/', router);
app.use('/', viewRouter)

app.use('/', apiRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup())

dbConnection();

app.listen(process.env.PORT, () => console.log(`Server on port: ${process.env.PORT}`));