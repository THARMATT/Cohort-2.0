const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
    const username=req.headers.username;
    const password=req.headers.password;
    const admin=await Admin.findOne({
        username,password
    })
    if(!admin){
        res.status(403).json({
            msg:'you are not allowed to make changes'
        })
    }

next()
}

module.exports = adminMiddleware;