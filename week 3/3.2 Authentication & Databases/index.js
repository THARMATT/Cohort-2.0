const express=require('express');
const app=express()
const mongoose=require('mongoose')
app.use(express.json())

mongoose.connect(process.env.MONGO_URI);

 const USER=mongoose.model('Users',{
    username:String,
    password:String,
    email:String
 })

app.get('/',(req,res)=>{
   res.send("hello world")
})
 app.post('/signup',async (req,res)=>{
  try {
   const username=req.body.username;
   const email=req.body.email;
   const password=req.body.password;
 
 
    const existingUser=await USER.findOne({email:email})
    if(existingUser){
       res.status(400).json({
          msg:' user already exist'
       })
    }
    const user =new USER({
       username:username,
       email:email,
       password:password
    })
    user.save()
    res.status(200).json({
       msg:'user is created',
    
    })
  } catch (error) {
   console.log(error)
  }
   })
   app.listen(3000)
   