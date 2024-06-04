const { User } = require("../db");

async function userMiddleware(req, res, next) {
    const user=User.find({});
    if(!user){
        res.status(400).json({
            msg:'Please login first'
        })
    }
    res.status(200).json({
        msg:"user is found"
    })
    next()
}


module.exports = userMiddleware;