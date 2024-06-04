const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Course, Admin } = require("../db");
const router = Router();
const jwt=require('jsonwebtoken');
const JWT_SECRET=require('../config')
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const{username,password}=req.body;
    const user= await Admin.create({
        username,password
    })
   await user.save();
   res.status(200).json({
    msg:"Admin created Successfully"
   })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
  try {
      const {username,password}=req.body;
     const user=await Admin.findOne({
          username,password
      })
     
      console.log(user);
      if(user){
         const token= jwt.sign({username},JWT_SECRET)
         
       res.status(200).json({
          msg:"Admin signin sucessfully1" ,token
      }) }
  } catch (error) {
    console.log(error);
  }
  


});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
   try {
     const{price,title,description}=req.body;
     const newcourse=await Course.create({
         title,price,description
     });
     res.status(
         200
     ).json({
         msg:'Course created Successfully',courseId:newcourse._id
     })
   } catch (error) {
    console.log(error);
   }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses=await Course.find({

    })
    res.send({
courses
    })
});

module.exports = router;