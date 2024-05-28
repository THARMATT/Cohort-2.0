const express=require('express')
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    const kidneyId=req.body.kidneyId
    const username=req.body.username
    const password=req.body.password

    if(username!="nigam" && password!="nigampass"){
        res.status(404).json({msg:"user not found"})
    }
    if(kidneyId!=1 ){
        res.status(404).json({msg:'kidney is not valid'})
    }
res.send({
    msg:"kidney health is good"
})
})
function usermiddleware(req,res,next){
    let username=req.body.username;
    let password=req.body.password;

    if(username!='nigam' && password!="pass"){
        res.send({
            msg:'invalid userrr',
            username,
            password
        })
    }
    // res.send({
    //     msg:'user is valid'
    // })
    next()
}
function kidneymiddleware(req,res,next){
    let kidneyId=req.body.kidneyId;
    if(kidneyId!=1 ){
        res.send({
            msg:'invalid kideny',
            kidneyId
        })
    }
    // res.send({
    //     msg:'Kidney is ok'
    // })
    next()
}
app.get('/health-checkup',usermiddleware,kidneymiddleware,(req,res)=>{
res.send({
    msg:'health is good'
})
})
// app.get('/error',()=>{
//     throw new Error('Something gdbd hai baba')

// })
app.use((err, req, res, next) => {

    console.log(err);
    res.status(404).json({msg:"server down",err});
    next()
})

app.listen(3000,()=>{
    console.log('app is listening on port 3000');
})