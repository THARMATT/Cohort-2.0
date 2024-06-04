// Middleware for handling auth
const JWT_SECRET = require('../config');
const jwt=require('jsonwebtoken')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    try {
        const token = req.headers.authorization;
        const word = token.split(' ');
        const decodedtoken = word[1];
        // console.log(decodedtoken);
        const decodedval = jwt.verify(decodedtoken, JWT_SECRET)
        if (decodedval.username) {
            next()
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = adminMiddleware;