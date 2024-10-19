const admin = require('firebase-admin');
const auth = admin.auth()


const checkAuth = (req, res, next) => {
    const idCookie = req.cookies.token;
    if (!idCookie) {
        return res.redirect('/login');
    }

    auth.verifyIdToken(idCookie)
        .then(decodedToken => {
            req.user = decodedToken;
            next();
        })
        .catch(error => {
            console.error('Token verification failed:', error);
            return res.status(401).json({ message: 'Unauthorized' });
        });
};

module.exports = checkAuth;
