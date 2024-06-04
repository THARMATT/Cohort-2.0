const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const JWT_SECRET = require("../config");
const jwt=require('jsonwebtoken');
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const{username,password}=req.body;
  await User.create({
        username,password
    });
    res.status(200).json({
        msg:"User created successfully"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    try {
        const{username,password}=req.body;
        const user=await User.findOne({
            username,password
        });
        if(user){
          const token=  jwt.sign({username},JWT_SECRET) ;
            res.status(200).json({
            msg:"Signin successfully",token
        })
        }
       
    } catch (error) {
        console.log(error);
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
 const courses=   await Course.find({

    })
    res.send({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
 try {
    const courseId=req.params.courseId;
    const username=req.body.username;
    const user=await User.find({username})
    if(user){
       await User.updateOne({
           username:username,
   
       },{
           '$push':{
               purchasedCourses:new mongoose.Types.ObjectId(courseId)
           }
       })
    }
    res.status(200).json({
       msg:"Course purchased successfully"
    })
 } catch (error) {
    console.log(error);
 }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try {
        const{username,password}=req.body;
        const user=await User.findOne({username,password}).populate('purchasedCourses');
        console.log(user.purchasedCourses);
        if(user){
            res.status(200).json({
                msg:"Purchased Courses are",
                courses:user.purchasedCourses
            })
        }
      } catch (error) {
       console.log(error);
      }
});

module.exports = router