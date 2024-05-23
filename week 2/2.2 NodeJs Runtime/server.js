const express=require('express')
const app=express()
const PORT=3000

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/conversation',(req,res)=>{
    res.send({
        name:"nigam",
        age:78
    })
})
app.use(express.json())
app.post('/post',(req,res)=>{
// const {name,age}=req.body;
console.log(req.body,"body")
console.log(req.headers,"headers")
res.send('post')
})
app.listen(PORT,()=>{
    console.log("app is listening on port 3000")
})