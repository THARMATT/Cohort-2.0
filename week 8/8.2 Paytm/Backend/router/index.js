const { Router } = require("express");
const { User, Account } = require("../db");
const jwt=require('jsonwebtoken');
const { JWT_SECRET } = require("../config");
const zod=require('zod');
const {authMiddleware} =require('../middlewares/authmiddleware')
const router=Router();

const signupBody=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string(),
})
const signinBody=zod.object({
    username:zod.string().email(),
    password:zod.string()
    
})
const updateBody=zod.object({
    username:zod.string().email().optional(),
    password:zod.string().optional(),
    firstname:zod.string().optional(),
    lastname:zod.string().optional(),
})
router.get('/',(req,res)=>{
res.send('hello');
})

router.post('/signup',async(req,res)=>{
   try {
     const {success}=signupBody.safeParse(req.body);
     if(!success){
          return res.status(411).send({
             msg:'Please provide valid credentials zod'
         })
     }
 const{username,firstname,lastname,password}=req.body;
 
 const Existinguser=await User.findOne({
     username
 });
 if(Existinguser){
    return res.status(411).json({
         msg:"Username already taken"
     })
 }
 const newUser=await User.create({
     username,firstname,lastname,password
 });
 const userId=newUser._id;
 await Account.create({
     userId,
     amount:100+Math.random()*1000000
 })
 const token=jwt.sign({userId},JWT_SECRET)
 res.status(200).send({
     msg:'User created successfully',newUser,token
 })
   } catch (error) {
    console.log(error);
   }
});


router.post('/signin',authMiddleware, async(req,res)=>{
    const {success}=signinBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg:"Not allowed to pass random shit in body "
        })
    }
const {username}=req.body;

const user=await User.findOne({
    username
})
if(!user){
    res.status(411).send({
        msg:"Please provide valid credentials"
    })
}
const token=jwt.sign({userId:user._id},JWT_SECRET);


res.status(200).send({
    msg:'User Signin successfully',token
})
})


router.put('/update',authMiddleware,async(req,res)=>{
const {success}=updateBody.safeParse(req.body)
if(!success){
    res.status(411).json({
        msg:'Provide valid Inputs'
    })
}

const user=await User.findOne({
    username:req.body.username
})
if(!user){
    return res.status(413).json({
        msg:"User not found"
    })
}
const updatedUser=await User.updateOne({
    _id:req.userId
 },req.body);
res.status(200).json({
    msg:"User updated successfully",
    updatedUser
})

})

router.get('/users/:firstname',async(req,res)=>{
const{firstname}=req.params;
const users=await User.findOne({
    firstname
});
res.status(200).json({
    msg:"User are:",users
})
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})
module.exports=router;