const express = require('express')
const viewRouter = express()
const path = require('path')
const admin = require('firebase-admin')
const auth = admin.auth()

viewRouter.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views', 'register.html'))
})

viewRouter.post('/register', async (req, res) => {
    const { email, password } = req.body
    try {
        await auth.createUser({
            email,
            password
        })
        res.redirect('/login')
    } catch (error) {
        console.error(`Server error ${error}`)
        res.redirect('/register')
    }
})

viewRouter.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views', 'login.html'))
})

viewRouter.post('/login', (req, res) => {
    
})

viewRouter.post('/logout', (req, res) => {
    
})

module.exports = viewRouter