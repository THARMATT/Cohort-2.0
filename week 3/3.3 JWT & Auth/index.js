const jwt=require('jsonwebtoken');

const token=jwt.sign({name:'nigam'},'my-secret',{
    expiresIn:'1h'
})
console.log('generated token',token)

const decodedToken=jwt.decode(token);
console.log('decoded token ',decodedToken)
try {
    jwt.verify(token,"my-secret",(err,decodedToken)=>{
        if(err){
            console.log('verfication failed',err);
        }
        else{
            console.log('token verified',decodedToken);
        }
    })
} catch (error) {
    console.log(error);
}