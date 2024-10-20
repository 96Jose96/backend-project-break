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

viewRouter.post ('/login', async (req, res) => {
    const { idToken } = req.body
    try {
        await auth.verifyIdToken(idToken)
        res.cookie('token', idToken, { httpOnly: true, secure: false })
        res.json({ success: true })
    } catch (error) {
        console.log(`Verify token FAILED ${error}`)
    }

})

viewRouter.post('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/products')
})

module.exports = viewRouter