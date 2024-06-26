const { JWT_SECRET } = require("../config");
const jwt =require('jsonwebtoken')
function authMiddleware(req,res,next){
    const {authorization}=req.headers;
    const words=authorization.split(' ');
    const token=words[1];
    const decoded=jwt.verify(token,JWT_SECRET);
  req.userId=decoded.userId
    next();
}
module.exports={authMiddleware}