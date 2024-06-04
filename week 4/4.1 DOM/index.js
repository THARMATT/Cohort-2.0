const express=require('express');
const app=express();
const cors=require('cors')
app.use(express.json())
app.use(cors());
app.get('/debounce',(req,res)=>{
   const{text}=req.query;
   res.status(200).send(text.toString())
})
app.get('/sum',(req,res)=>{
    const {a,b}=req.query;
    let num1=parseInt(a);
    let num2=parseInt(b);
   if( isNaN(num1) || isNaN(num2)){
    res.status(403).json({
        msg:'please provide valid numbers'
    })
   }
    let result=num1+num2
   
    res.status(200).send(result.toString())
})
app.get('/interest',(req,res)=>{

    const {p,r,t}=req.query;
    const principal=parseInt(p)
    const rate=parseInt(r)
    const time=parseInt(t)
    if(isNaN(rate) || isNaN(time) || isNaN(principal)){
        res.status(400).json({
            msg:"please provide correct values"
        })
    }
    const result=(principal*rate*time)/100;
    res.status(200).send(result.toString())
})
app.listen(3000)