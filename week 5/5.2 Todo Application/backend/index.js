const express=require('express')
const app=express();
const bodyparser=require('body-parser')
const todoRouter=require('./routes/todoRoute')
const cors=require('cors')

app.use(cors())
app.use(bodyparser.json());
app.use('/',todoRouter)

app.get('/',(req,res)=>{
    res.send('heelo world')
})
app.listen(3000,()=>{
    console.log('App is listening on port 3000');
})