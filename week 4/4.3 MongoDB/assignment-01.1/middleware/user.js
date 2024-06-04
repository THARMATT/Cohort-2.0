const { User } = require("../db");

async function userMiddleware(req, res, next) {
   const{username,password}=req.headers;
  const user= await User.findOne({
    username,password
   })
   if(!user){
    res.status(403).json({
        msg:'you are not allowed to make changes'
    })
   }
   next()

}


module.exports = userMiddleware;