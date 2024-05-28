const express=require('express')
const app=express()
app.use(express.json())
const mongoose=require('mongoose')
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();
mongoose.connect(process.env.MONGO_URI)

const User=mongoose.model('User',{
    username:String,
    email:String,
    password:String
})
app.get('/',(req,res)=>{
res.send("hello world")
})

app.post('/signup',async(req,res)=>{
try {
    const {username,email,password}=req.body
    const existingUser=await  User.findOne({email})
    if(existingUser){
        res.status(400).json({
            msg:"User already exists"
        })
    
    }
    const user=new User({
        username:username,
        email:email,
        password:password
    })
    user.save()
    
    res.status(200).json({
        msg:"User is created",username
    })
} catch (error) {
    console.log(error.message)
}
})
app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})
