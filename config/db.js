const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connection OK')
    } catch (err) {
        console.log(err)
        throw new Error('Database connection FAILED')
    }
}

module.exports = dbConnection