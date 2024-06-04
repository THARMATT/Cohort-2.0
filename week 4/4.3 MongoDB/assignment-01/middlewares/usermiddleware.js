function userMiddleware(req,res,next){
console.log('hie there');
next()
}
module.exports=userMiddleware;