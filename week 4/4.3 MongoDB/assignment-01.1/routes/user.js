const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup',async (req, res) => {
 const{username,password}=req.body;
 const newUser=await User.create({
  username,password
 })
 res.status(200).json(newUser)
});

router.get('/courses', async(req, res) => {
  const courses=await Course.find({

  })
  res.send(courses)
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
  try {
    const {courseId}=req.params;
    const{username}=req.headers;
    await Course.findOne({
      courseId
    })
    if(courseId){
    const updateduser= await User.updateOne(
        {
          username:username
        },{
        
       "$push":{
          purchasedCourses:new mongoose.Types.ObjectId(courseId)
        }
      })
console.log("updateduser",updateduser);

    }
    res.status(200).json({
      msg:'Purchase completed'
    })
  } catch (error) {
    
  }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
 try {
    
  const user = await User.findOne({ username: req.headers.username }).populate('purchasedCourses');
  if (!user) {
      return res.status(404).json({ msg: "User not found" });
  }
   res.status(200).json({
     msg:"All purchased couses ",courses:user.purchasedCourses
 
   })
 } catch (error) {
  console.log(error);
 }
});

module.exports = router