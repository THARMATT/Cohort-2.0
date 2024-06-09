const express=require('express')
const bodyParser = require('body-parser');
const app=express();
const userRouter=require('./routes/index')
app.use(bodyParser.json());

app.use('/user',userRouter)
app.get('/',(req,res)=>{
    res.send("hello ji")
})
app.listen(3000,()=>{
    console.log(`app is listening on port 3000`);
})